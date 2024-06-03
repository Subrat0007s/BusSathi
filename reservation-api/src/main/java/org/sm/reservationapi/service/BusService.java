package org.sm.reservationapi.service;

import java.util.Optional;

import org.sm.reservationapi.dao.AdminDao;
import org.sm.reservationapi.dao.BusDao;
import org.sm.reservationapi.dto.BusRequest;
import org.sm.reservationapi.dto.BusResponse;
import org.sm.reservationapi.dto.ResponseStrcture;
import org.sm.reservationapi.exception.BusNotFoundException;
import org.sm.reservationapi.model.Admin;
import org.sm.reservationapi.model.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BusService {
	@Autowired
	private BusDao busDao;
	@Autowired
	private AdminDao adminDao;

	private Bus mapBus(BusRequest request) {
		return Bus.builder().name(request.getName()).departure_date(request.getDeparture_date())
				.busno(request.getBusno()).fromLoc(request.getFromLoc()).toLoc(request.getToLoc())
				.noOfSeats(request.getNoOfSeats()).build();
	}

	private BusResponse mapBusResponse(Bus bus) {
		return BusResponse.builder().name(bus.getName()).departure_date(bus.getDeparture_date()).toLoc(bus.getToLoc())
				.busno(bus.getBusno()).fromLoc(bus.getFromLoc()).noOfSeats(bus.getNoOfSeats()).build();
	}

	public ResponseEntity<ResponseStrcture<BusResponse>> saveBus(BusRequest request, Integer admin_id) {
		ResponseStrcture<BusResponse> structure = new ResponseStrcture<>();
		Optional<Admin> admin = adminDao.findById(admin_id);
		if (admin.isPresent()) {
			Bus bus = mapBus(request);
//        	Admin a=admin.get();
//        	bus.setAdmin(a);
//            a.getBus().add(bus);
//            adminDao.saveAdmin(a);

			bus.setAdmin(admin.get());
			admin.get().getBus().add(bus);
//			busDao.save(bus); // In Admin Class i have taken CascadeType.ALL so no need to call save method explicitly.
			adminDao.saveAdmin(admin.get());
			structure.setData(mapBusResponse(bus));
			structure.setMessage("Bus Added");
			structure.setStatus(HttpStatus.CREATED.value());
			return ResponseEntity.status(HttpStatus.CREATED).body(structure);
		}
		throw new BusNotFoundException("Invalid Admin Id");
	}

	public ResponseEntity<ResponseStrcture<BusResponse>> updateBus(Integer id, BusRequest request) {
		ResponseStrcture<BusResponse> strcture = new ResponseStrcture<>();
		Optional<Bus> data = busDao.findById(id);
		if (data.isPresent()) {
			Bus bus = mapBus(request);
			bus.setId(id);
			bus.setName(request.getName());
			bus.setBusno(request.getBusno());
			bus.setDeparture_date(request.getDeparture_date());
			bus.setFromLoc(request.getFromLoc());
			bus.setToLoc(request.getToLoc());
			bus.setNoOfSeats(request.getNoOfSeats());
			bus.setAdmin(request.getAdmin());
			strcture.setData(mapBusResponse(busDao.save(bus)));
			strcture.setMessage("Bus Added");
			strcture.setStatus(HttpStatus.CREATED.value());
			return ResponseEntity.status(HttpStatus.CREATED).body(strcture);
		}
		throw new BusNotFoundException("Invalid User Id");
	}

	public ResponseEntity<ResponseStrcture<BusResponse>> findByBusId(Integer id) {
		ResponseStrcture<BusResponse> strcture = new ResponseStrcture<>();
		Optional<Bus> data = busDao.findById(id);
		if (data.isPresent()) {
			strcture.setData(mapBusResponse(data.get()));
			strcture.setMessage("Bus Details.");
			strcture.setStatus(HttpStatus.FOUND.value());
			return ResponseEntity.status(HttpStatus.FOUND).body(strcture);
		}
		throw new BusNotFoundException("Invalid User Id");
	}

	public ResponseEntity<ResponseStrcture<BusResponse>> findByBusNo(String busno) {
		ResponseStrcture<BusResponse> strcture = new ResponseStrcture<>();
		Optional<Bus> data = busDao.findByBusNo(busno);
		if (data.isPresent()) {
			strcture.setData(mapBusResponse(data.get()));
			strcture.setMessage("Bus Details.");
			strcture.setStatus(HttpStatus.FOUND.value());
			return ResponseEntity.status(HttpStatus.FOUND).body(strcture);
		}
		throw new BusNotFoundException("Invalid User Id");
	}
}
