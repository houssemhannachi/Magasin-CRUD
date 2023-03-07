package fr.sparkit.spring.security.jwt.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduit;
    private String titre;
    private String description;
    private double prix;
    private long qteStock;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @OneToOne()
    @JoinColumn(name = "photo", referencedColumnName = "id")
    private Photo photo;
}
