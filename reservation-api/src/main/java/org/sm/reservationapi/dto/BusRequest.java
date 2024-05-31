package org.sm.reservationapi.dto;

import java.time.LocalDate;

import org.sm.reservationapi.model.Admin;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class BusRequest {
	@NotBlank(message = "Name is Mandatory")
	private String name;
	private LocalDate departure_date;
	@NotBlank(message = "Bus Number is Mandatory")
	@Size(min = 11, max = 12)
	private String busno;
	@NotBlank(message = "Location is Mandatory")
	private String fromLoc;
	@NotBlank(message = "Location is Mandatory")
	private String toLoc;
	private Integer noOfSeats;
	private Admin admin;
}
