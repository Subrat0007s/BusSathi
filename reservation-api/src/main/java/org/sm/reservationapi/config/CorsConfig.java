package org.sm.reservationapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS Configuration class for the Reservation API.
 *
 * This class configures Cross-Origin Resource Sharing (CORS) for the application,
 * allowing requests from specific origins, which are vital for local development and testing.
 * Specifically, it permits requests from localhost at port 3000 to facilitate frontend-backend communication,
 * as well as other common development ports.
 *
 * The configuration supports all HTTP methods (GET, POST, PUT, DELETE, OPTIONS, etc.)
 * and allows for credentials to be included in requests if necessary.
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Allows CORS for all endpoints
                .allowedOrigins("http://localhost:3000") // Allows requests from localhost:3000
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD") // Supports all HTTP methods
                .allowCredentials(true);
    }
}