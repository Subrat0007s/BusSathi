package org.sm.reservationapi.repository;

import java.util.Optional;

import org.sm.reservationapi.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus, Integer> {
//	@Query("select b from Bus b where busno=?1")
	public Optional<Bus> findByBusno(String busNo);
}
