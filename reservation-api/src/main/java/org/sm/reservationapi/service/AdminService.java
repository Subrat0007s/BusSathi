package org.sm.reservationapi.service;

import java.util.Optional;

import org.sm.reservationapi.dao.AdminDao;
import org.sm.reservationapi.dto.AdminRequest;
import org.sm.reservationapi.dto.AdminResponse;
import org.sm.reservationapi.dto.ResponseStrcture;
import org.sm.reservationapi.exception.AdminNotFoundException;
import org.sm.reservationapi.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private ReservationApiMailService mailService;

	private Admin mapAdmin(AdminRequest adminRequest) {
		return Admin.builder().name(adminRequest.getName()).phone(adminRequest.getPhone())
				.email(adminRequest.getEmail()).gst_number(adminRequest.getGst_number())
				.travels_name(adminRequest.getTravels_name()).password(adminRequest.getPassword()).build();
	}

	private AdminResponse mapAdminResponse(Admin admin) {
		return AdminResponse.builder().id(admin.getId()).name(admin.getName()).phone(admin.getPhone())
				.email(admin.getEmail()).gst_number(admin.getGst_number()).travels_name(admin.getTravels_name())
				.password(admin.getPassword()).build();
	}

	public String activate(String token) {
		Optional<Admin> admin = adminDao.findByToken(token);
		if (admin.isEmpty()) {
			throw new AdminNotFoundException("invalid Token!!");
		}
		Admin a = admin.get();
		a.setStatus("ACTIVE");
		a.setToken(null);
		adminDao.saveAdmin(a);
		return "Your Account has been activated";
	}

	public ResponseEntity<ResponseStrcture<AdminResponse>> add(AdminRequest adminRequest, HttpServletRequest request) {
		ResponseStrcture<AdminResponse> strcture = new ResponseStrcture<>();
		String url = request.getRequestURL().toString();
		String path = request.getServletPath();
		String activation_link = url.replace(path, "/api/admins/activate");
		String token = RandomString.make(56);
		activation_link += "?token=" + token;
		System.out.println(activation_link);
		Admin admin = mapAdmin(adminRequest);
		admin.setToken(token);
		admin.setStatus("IN_ACTIVE");
		adminDao.saveAdmin(admin);
		strcture.setData(mapAdminResponse(admin));
		strcture.setMessage(mailService.sendMail(admin.getEmail(), activation_link));
		strcture.setStatus(HttpStatus.CREATED.value());
		return ResponseEntity.status(HttpStatus.CREATED).body(strcture);
	}

	public ResponseEntity<ResponseStrcture<AdminResponse>> update(AdminRequest adminRequest, Integer id) {
		ResponseStrcture<AdminResponse> strcture = new ResponseStrcture<>();
		Optional<Admin> data = adminDao.findById(id);
		if (data.isPresent()) {
			Admin a = data.get();
			a.setId(id);
			a.setName(adminRequest.getName());
			a.setPhone(adminRequest.getPhone());
			a.setEmail(adminRequest.getEmail());
			a.setGst_number(adminRequest.getGst_number());
			a.setPassword(adminRequest.getPassword());
			a.setTravels_name(adminRequest.getTravels_name());
			strcture.setData(mapAdminResponse(adminDao.saveAdmin(a)));
			strcture.setMessage("Admin updated");
			strcture.setStatus(HttpStatus.ACCEPTED.value());
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(strcture);
		}
		throw new AdminNotFoundException("Invalid Admin Id!");
	}

	public ResponseEntity<ResponseStrcture<AdminResponse>> findAdmin(Integer id) {
		ResponseStrcture<AdminResponse> strcture = new ResponseStrcture<>();
		Optional<Admin> data = adminDao.findById(id);
		if (data.isPresent()) {
			strcture.setData(mapAdminResponse(data.get()));
			strcture.setMessage("Admin Found");
			strcture.setStatus(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(strcture);
		}
		throw new AdminNotFoundException("Invalid Admin Id!");
	}

	public ResponseEntity<ResponseStrcture<String>> deleteAdmin(Integer id) {
		ResponseStrcture<String> strcture = new ResponseStrcture<>();
		Optional<Admin> data = adminDao.findById(id);
		if (data.isPresent()) {
			strcture.setData("Admin id: " + id + " Deleted.");
			adminDao.deleteById(id);
			strcture.setMessage("Admin Deleted");
			strcture.setStatus(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(strcture);
		}
		throw new AdminNotFoundException("Invalid Admin Id!");
	}

	public ResponseEntity<ResponseStrcture<AdminResponse>> verifyAdmin(Long phone, String password) {
		ResponseStrcture<AdminResponse> strcture = new ResponseStrcture<>();
		Optional<Admin> data = adminDao.verifyByphone(phone, password);
		if (data.isPresent()) {
			strcture.setData(mapAdminResponse(data.get()));
			strcture.setMessage("Admin Verified");
			strcture.setStatus(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(strcture);
		}
		throw new AdminNotFoundException("Invalid Credentials!!!");
	}

	public ResponseEntity<ResponseStrcture<AdminResponse>> verifyAdmin(String email, String password) {
		ResponseStrcture<AdminResponse> strcture = new ResponseStrcture<>();
		Optional<Admin> data = adminDao.verifyByEmail(email, password);
		if (data.isPresent()) {
			strcture.setData(mapAdminResponse(data.get()));
			strcture.setMessage("Admin Verified");
			strcture.setStatus(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(strcture);
		}
		throw new AdminNotFoundException("Invalid Credentials!!!");
	}
}
