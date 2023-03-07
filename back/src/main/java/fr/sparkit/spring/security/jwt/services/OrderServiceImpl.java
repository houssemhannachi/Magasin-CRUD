package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    private OrderLineRepository orderLineRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override

    public void addOrder(Commande commande) {
        commande.setPrixTotal(calculateTotalAmount(commande));
        orderRepository.save(commande);
        commande.getOrderLineList().forEach(orderLine -> {
                    orderLine.setCommande(commande);
                    changeProductQuantity(orderLine);
                    orderLineRepository.save(orderLine);
                }
        );

    }

    private void changeProductQuantity(OrderLine orderLine) {

        Product product = orderLine.getProduct();
        long quantityRes = product.getQteStock() - orderLine.getQuantity();

        product.setQteStock(quantityRes);
        productRepository.save(product);

    }

    public double calculateTotalAmount(Commande commande) {
        double totalAmount = 0;

        for (OrderLine orderLine : commande.getOrderLineList()) {
            totalAmount += orderLine.getQuantity() * orderLine.getAmount();
        }

        return totalAmount;
    }

    @Override
    public List<Commande> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
