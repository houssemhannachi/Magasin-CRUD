package fr.sparkit.spring.security.jwt.exception;

import fr.sparkit.spring.security.jwt.advice.*;
import org.springframework.dao.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.*;

import java.util.*;

@RestControllerAdvice
public class ExceptionHandlerController {
    @ExceptionHandler(value = {DataIntegrityViolationException.class})
    public ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
        // Handle all other exceptions
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong");
        return new ResponseEntity<>(errorResponse, new HttpHeaders(), errorResponse.getStatus());
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Object> handleUserNotFoundException(NoSuchElementException nsee) {
        return new ResponseEntity<>(nsee.getMessage(), HttpStatus.NOT_FOUND);
    }
}
