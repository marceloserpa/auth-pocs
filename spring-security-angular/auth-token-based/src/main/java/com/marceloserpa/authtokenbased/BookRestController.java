package com.marceloserpa.authtokenbased;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/books")
@CrossOrigin
public class BookRestController {

    @GetMapping
    public List<Book> getBooks(){

        return Arrays.asList(new Book("Stephen King", "The Shining"));
    }
}
