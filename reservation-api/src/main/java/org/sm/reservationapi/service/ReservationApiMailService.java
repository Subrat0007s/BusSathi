package org.sm.reservationapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ReservationApiMailService {
	@Autowired
	private JavaMailSender mailSender;

	public String sendMail(String email, String url) {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(email);
		mailMessage.setText("Click this verification Link: " + url);
		mailMessage.setSubject("Activate Your Account");
		mailSender.send(mailMessage);
		return "Registration Successfull.Kindly, Verify Your Email Address.";
	}
}
