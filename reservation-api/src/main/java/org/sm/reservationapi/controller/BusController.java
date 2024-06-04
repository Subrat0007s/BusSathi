package org.sm.reservationapi.controller;

import java.util.List;

import org.sm.reservationapi.dto.BusRequest;
import org.sm.reservationapi.dto.BusResponse;
import org.sm.reservationapi.dto.ResponseStrcture;
import org.sm.reservationapi.model.Bus;
import org.sm.reservationapi.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/bus")
public class BusController {
	@Autowired
	private BusService service;

	@PostMapping("/{admin_id}")
	public ResponseEntity<ResponseStrcture<BusResponse>> save(@Valid @RequestBody BusRequest busRequest,
			@PathVariable(name = "admin_id") Integer admin_id) {
		return service.saveBus(busRequest, admin_id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ResponseStrcture<BusResponse>> update(@PathVariable(name = "id") Integer id,
			@RequestBody BusRequest busRequest) {
		return service.updateBus(id, busRequest);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ResponseStrcture<BusResponse>> findbyBusId(@PathVariable Integer id) {
		return service.findByBusId(id);
	}

	@GetMapping("/find-By-BusNo/{busno}")
	public ResponseEntity<ResponseStrcture<BusResponse>> findbyBusNo(@PathVariable(name = "busno") String busno) {
		return service.findByBusNo(busno);
	}

	@GetMapping()
	public ResponseEntity<ResponseStrcture<List<Bus>>> findAllBus() {
		return service.findAllBusDetails();
	}
}
