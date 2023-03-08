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

    @Autowired
    private IOrderLineService orderLineService;
    @Autowired
    private IProductService productService;

    @Override

    public void addOrder(Commande commande) {
        for (OrderLine orderLine : commande.getOrderLineList()) {
            if (!productService.inStock(orderLine.getProduct())) {
                throw new NoSuchElementException("Ce produit est hors stock.");
            }
            if (!orderLineService.checkQuantity(orderLine)) {
                throw new NoSuchElementException("Quantité du produit en stock < Quantité du produit demandé");
            }

        }
        try {
            commande.setPrixTotal(calculateTotalAmount(commande));
            orderRepository.save(commande);
            commande.getOrderLineList().forEach(orderLine -> {
                        orderLine.setCommande(commande);
                        orderLineService.changeProductQuantity(orderLine);
                        orderLineRepository.save(orderLine);
                    }
            );
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

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
