package fr.sparkit.spring.security.jwt.controllers;


import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import fr.sparkit.spring.security.jwt.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/addCategory")
    @ResponseBody
    public Category addCategory(@RequestBody Category category) {

        return categoryService.addCategory(category);
    }

    @GetMapping("/getAllCategories")
    public List<Category> getAllCategories() {
        return categoryService.listAllCategory();
    }

    @DeleteMapping("/deleteCategory/{id}")
    public void deleteCategoryById(@PathVariable("id") Long id) {
        categoryService.deleteCategory(id);

    }

    @GetMapping("/getCategoryById/{id}")
    public Category getCategoryById(@PathVariable("id") Long id) {
        return categoryService.getCategoryById(id);
    }

    @PutMapping("/updateCategory")
    public void updateCategory(@RequestBody Category category) {
        categoryService.updateCategory(category);
    }


}
