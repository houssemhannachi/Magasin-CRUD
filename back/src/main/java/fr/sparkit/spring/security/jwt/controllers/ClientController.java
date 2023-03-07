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
public class ClientController {
    @Autowired
    private IClientService clientService;

    @PostMapping("/addClient")
    @ResponseBody
    public ResponseEntity<?> addClient(@RequestBody Client client) {

        clientService.addClient(client);
        return ResponseEntity.ok(new MessageResponse("Ce client est enregistré avec succès!"));
    }

    @GetMapping("/getAllClients")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @DeleteMapping("/deleteClient/{id}")
    public void deleteClientById(@PathVariable("id") Long id) {
        try {
            clientService.deleteClient(id);
        } catch (DataIntegrityViolationException ex) {
            throw new DataIntegrityViolationException("we cannot delete this client");
        }
    }

    @GetMapping("/getClientById/{clientId}")
    public Client getClientById(@PathVariable("clientId") Long clientId) {
        return clientService.getClientById(clientId);
    }

    @PutMapping("/editClient")
    public ResponseEntity<?> editClient(@RequestBody Client client) {
        clientService.editClient(client);
        return ResponseEntity.ok(new MessageResponse("Ce client est modifié avec succès!"));
    }
}
