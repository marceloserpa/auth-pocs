package com.marceloserpa.authtokenbased;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class HomeRestController {

    @GetMapping("/hello")
    public String ok() {
        return "ooi";
    }

}
