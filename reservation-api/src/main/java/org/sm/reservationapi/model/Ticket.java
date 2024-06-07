package org.sm.reservationapi.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Ticket {
	private Integer id;
	private LocalDateTime ticketBookedTime;
	private Double cost;
	private String status;
	private Integer noOfSeatsBooked;
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "bus_id")
	private Bus bus;
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "user_id")
	private User user;
}
