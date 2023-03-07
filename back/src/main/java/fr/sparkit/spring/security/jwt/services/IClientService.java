package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;

import java.util.*;

public interface IClientService {
    Client addClient(Client client);

    List<Client> getAllClients();

    void deleteClient(Long id);

    Client getClientById(Long clientId);

    Client editClient(Client client);
}
