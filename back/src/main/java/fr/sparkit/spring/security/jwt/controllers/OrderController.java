package fr.sparkit.spring.security.jwt.controllers;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.payload.response.*;
import fr.sparkit.spring.security.jwt.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.dao.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    IOrderService orderService;

    @PostMapping("/addOrder")
    public ResponseEntity<?> add(@RequestBody Commande commande) {

        orderService.addOrder(commande);

        return ResponseEntity.ok(new MessageResponse("Cette commande est enregistrée avec succès!"));
    }

    @GetMapping("/getAllOrders")
    public List<Commande> getAllOrders() {
        return orderService.getAllOrders();
    }

    @DeleteMapping("/deleteOrder/{id}")
    public void deleteProductById(@PathVariable("id") Long id) {
        try {
            orderService.deleteOrder(id);
        } catch (DataIntegrityViolationException ex) {
            throw new DataIntegrityViolationException("we cannot delete this order");
        }
    }
}
