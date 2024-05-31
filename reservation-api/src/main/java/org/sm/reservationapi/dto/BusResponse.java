package org.sm.reservationapi.dto;

import java.time.LocalDate;

import org.sm.reservationapi.model.Admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusResponse {
	private Integer id;
	private String name;
	private LocalDate departure_date;
	private String busno;
	private String fromLoc, toLoc;
	private Integer noOfSeats;
	private Admin admin;
}
