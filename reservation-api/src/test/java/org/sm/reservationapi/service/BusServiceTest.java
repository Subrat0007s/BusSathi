import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class BusServiceTest {

    @InjectMocks
    private BusService busService;

    @Mock
    private BusRepository busRepository;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSaveBus() {
        Bus bus = new Bus(1, "BUS123", "City A", "City B");
        when(busRepository.save(bus)).thenReturn(bus);

        Bus savedBus = busService.saveBus(bus);
        assertEquals(bus.getId(), savedBus.getId());
        assertEquals(bus.getBusNo(), savedBus.getBusNo());
    }

    @Test
    public void testUpdateBus() {
        Bus bus = new Bus(1, "BUS123", "City A", "City B");
        when(busRepository.findById(1)).thenReturn(Optional.of(bus));
        when(busRepository.save(bus)).thenReturn(bus);

        Bus updatedBus = busService.updateBus(1, bus);
        assertEquals(bus.getBusNo(), updatedBus.getBusNo());
    }

    @Test
    public void testFindByBusId() {
        Bus bus = new Bus(1, "BUS123", "City A", "City B");
        when(busRepository.findById(1)).thenReturn(Optional.of(bus));

        Bus foundBus = busService.findByBusId(1);
        assertEquals(bus.getBusNo(), foundBus.getBusNo());
    }

    @Test
    public void testFindByBusNo() {
        Bus bus = new Bus(1, "BUS123", "City A", "City B");
        when(busRepository.findByBusNo("BUS123")).thenReturn(Optional.of(bus));

        Bus foundBus = busService.findByBusNo("BUS123");
        assertEquals(bus.getId(), foundBus.getId());
    }

    @Test
    public void testFindAllBusDetails() {
        List<Bus> buses = Arrays.asList(new Bus(1, "BUS123", "City A", "City B"), 
                                         new Bus(2, "BUS456", "City C", "City D");
        when(busRepository.findAll()).thenReturn(buses);

        List<Bus> foundBuses = busService.findAllBusDetails();
        assertEquals(buses.size(), foundBuses.size());
    }

    @Test
    public void testFindSpecificBusDetails() {
        Bus bus = new Bus(1, "BUS123", "City A", "City B");
        when(busRepository.findById(1)).thenReturn(Optional.of(bus));

        Bus foundBus = busService.findSpecificBusDetails(1);
        assertEquals(bus.getBusNo(), foundBus.getBusNo());
    }
}
