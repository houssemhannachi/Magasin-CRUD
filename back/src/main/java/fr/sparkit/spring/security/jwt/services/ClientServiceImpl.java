package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class ClientServiceImpl implements IClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    @Override
    public Client getClientById(Long clientId) {
        try {
            return clientRepository.findById(clientId).get();
            // code to get user by id
        } catch (NoSuchElementException e) {
            throw new NoSuchElementException("User not found with id " + clientId);
        }


    }

    @Override
    public Client editClient(Client client) {
        return clientRepository.saveAndFlush(client);
    }
}
