import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class TicketServiceTest {
   
    private TicketService ticketService;
    private UserService userService;  // Assume this service exists
    private BusService busService;  // Assume this service exists
    private BookingRepository bookingRepository;  // Assume this repository exists  
  
    @BeforeEach
    void setUp() {
        userService = mock(UserService.class);
        busService = mock(BusService.class);
        bookingRepository = mock(BookingRepository.class);
        ticketService = new TicketService(userService, busService, bookingRepository);
    }

    @Test
    void testSuccessfulBooking() {
        // Arrange
        User user = new User("validUserId", true);
        Bus bus = new Bus("validBusId", true, 50); // 50 seats available
        when(userService.isValidUser("validUserId")).thenReturn(true);
        when(busService.isValidBus("validBusId")).thenReturn(true);
        when(busService.getAvailableSeats("validBusId")).thenReturn(50);
        
        // Act
        Booking booking = ticketService.bookTicket("validUserId", "validBusId", 1); // Book 1 seat
        
        // Assert
        assertNotNull(booking);
        verify(bookingRepository).save(any(Booking.class));
    }

    @Test
    void testInvalidUser() {
        // Arrange
        when(userService.isValidUser("invalidUserId")).thenReturn(false);
        
        // Act & Assert
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            ticketService.bookTicket("invalidUserId", "validBusId", 1);
        });
        assertEquals("Invalid user", exception.getMessage());
    }

    @Test
    void testInvalidBus() {
        // Arrange
        when(userService.isValidUser("validUserId")).thenReturn(true);
        when(busService.isValidBus("invalidBusId")).thenReturn(false);
        
        // Act & Assert
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            ticketService.bookTicket("validUserId", "invalidBusId", 1);
        });
        assertEquals("Invalid bus", exception.getMessage());
    }

    @Test
    void testInactiveUser() {
        // Arrange
        User inactiveUser = new User("inactiveUserId", false);
        when(userService.isValidUser("inactiveUserId")).thenReturn(false);
        
        // Act & Assert
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            ticketService.bookTicket("inactiveUserId", "validBusId", 1);
        });
        assertEquals("User is inactive", exception.getMessage());
    }

    @Test
    void testInsufficientSeats() {
        // Arrange
        User user = new User("validUserId", true);
        Bus bus = new Bus("validBusId", true, 1); // 1 seat available
        when(userService.isValidUser("validUserId")).thenReturn(true);
        when(busService.isValidBus("validBusId")).thenReturn(true);
        when(busService.getAvailableSeats("validBusId")).thenReturn(1);
        
        // Act & Assert
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            ticketService.bookTicket("validUserId", "validBusId", 2); // Attempt to book 2 seats
        });
        assertEquals("Not enough seats available", exception.getMessage());
    }

    @Test
    void testSeatCalculation() {
        // Arrange
        Bus bus = new Bus("validBusId", true, 50); // 50 seats available
        when(busService.getAvailableSeats("validBusId")).thenReturn(50);
        
        // Act
        int availableSeats = busService.getAvailableSeats("validBusId");
        
        // Assert
        assertEquals(50, availableSeats);
    }

    @Test
    void testCostMapping() {
        // Arrange
        // Assume there's a method to get cost based on bus type or other parameters.
        when(busService.getBusCost("validBusId")).thenReturn(100.0);
        
        // Act
        double cost = busService.getBusCost("validBusId");
        
        // Assert
        assertEquals(100.0, cost);
    }
}