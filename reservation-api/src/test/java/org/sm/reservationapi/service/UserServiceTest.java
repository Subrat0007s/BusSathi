import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.sm.reservationapi.model.User;
import org.sm.reservationapi.repository.UserRepository;
import org.sm.reservationapi.service.UserService;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User user;

    @BeforeEach
    public void setUp() {
        user = new User();
        user.setId(1L);
        user.setName("John Doe");
        user.setEmail("john@example.com");
    }

    @Test
    public void addUser_ShouldSaveUser() {
        when(userRepository.save(any(User.class))).thenReturn(user);
        User createdUser = userService.addUser(user);
        assertNotNull(createdUser);
        assertEquals(user.getId(), createdUser.getId());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void updateUser_ShouldUpdateAndReturnUser() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        user.setName("Jane Doe");
        when(userRepository.save(user)).thenReturn(user);
        User updatedUser = userService.updateUser(1L, user);
        assertNotNull(updatedUser);
        assertEquals("Jane Doe", updatedUser.getName());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void findUserById_ShouldReturnUser() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        User foundUser = userService.findUserById(1L);
        assertNotNull(foundUser);
        assertEquals(user.getId(), foundUser.getId());
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    public void deleteUser_ShouldRemoveUser() {
        doNothing().when(userRepository).deleteById(1L);
        userService.deleteUser(1L);
        verify(userRepository, times(1)).deleteById(1L);
    }

    @Test
    public void activate_ShouldSetActive() {
        user.setActive(false);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        userService.activate(1L);
        assertTrue(user.isActive());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void verifyAdmin_ShouldReturnTrueIfUserIsAdmin() {
        user.setAdmin(true);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        boolean isAdmin = userService.verifyAdmin(1L);
        assertTrue(isAdmin);
        verify(userRepository, times(1)).findById(1L);
    }
}
