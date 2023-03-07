package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.dao.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class CategoryServiceImpl implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public Category addCategory(Category category) {
        if (categoryRepository.existsByTitre(category.getTitre())) {
            throw new NoSuchElementException(category.getTitre() + " existe dèjà.");
        }

        return categoryRepository.save(category);


    }

    @Override
    public List<Category> listAllCategory() {
        return categoryRepository.findAll();

    }

    @Override
    public void deleteCategory(Long id) {
        try {
            categoryRepository.deleteById(id);
        } catch (DataIntegrityViolationException ex) {
            throw new DataIntegrityViolationException("we cannot delete this category");
        }
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryRepository.saveAndFlush(category);

    }

    @Override
    public Category getCategoryById(Long id) {
        try {
            return categoryRepository.findById(id).get();
            // code to get user by id
        } catch (NoSuchElementException e) {
            throw new NoSuchElementException("Category not found with id " + id);
        }
    }


}
