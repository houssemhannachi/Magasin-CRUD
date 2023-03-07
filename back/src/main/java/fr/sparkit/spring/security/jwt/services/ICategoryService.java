package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import org.springframework.stereotype.*;

import java.util.*;

public interface ICategoryService {
    Category addCategory(Category category);

    List<Category> listAllCategory();

    void deleteCategory(Long id);

    Category updateCategory(Category category);

    Category getCategoryById(Long id);
}
