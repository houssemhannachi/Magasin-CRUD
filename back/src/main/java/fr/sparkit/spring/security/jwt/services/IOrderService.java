package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;

import java.util.*;

public interface IOrderService {

    void addOrder(Commande commande);

    double calculateTotalAmount(Commande commande);

    List<Commande> getAllOrders();

    void deleteOrder(Long id);
}
