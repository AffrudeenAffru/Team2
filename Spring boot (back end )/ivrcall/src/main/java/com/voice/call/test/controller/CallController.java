package com.voice.call.test.controller;

import java.net.URI;
import java.net.URISyntaxException;
import com.twilio.rest.api.v2010.account.Message;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.type.PhoneNumber;

@RestController

@CrossOrigin(origins ="http://localhost:4200")
public class CallController {
	 private final static String ACCOUNT_SID = "ACb22d1ea6321e2638a9eafb8d104e90d4";
		private final static String AUTH_ID = "a16f71b9ded1f9e99bf03f73abe432ec";
		private final static String FROM_NUMBER="+12053464341";
	//	private final static String TO_NUMBER ="+917010593757";

		static {
			   Twilio.init(ACCOUNT_SID, AUTH_ID);
			}
@GetMapping("/voicecall/{Num}")
@CrossOrigin(origins ="http://localhost:4200")
@ResponseBody
public String makeVoiceCall (@PathVariable("Num") String Num) throws URISyntaxException  {
	System.out.println("TheParsedMailI"+Num);
	Call.creator(new PhoneNumber("+91"+Num), new PhoneNumber(FROM_NUMBER),
			   new URI("http://demo.twilio.com/docs/voice.xml")).create();
    
	return "Sucess";}
@GetMapping("/txt/{Num}")
@CrossOrigin(origins ="http://localhost:4200")
@ResponseBody
public String makeVoiceCall2 (@PathVariable("Num") String Num){

    Message message = Message.creator(new PhoneNumber("+91"+Num),
        new PhoneNumber(FROM_NUMBER), 
        "Exclusively for YOU! From Team2\r\n"
        + "Recharge with Rs399 (56 days) & get 1.5GB/day and Unlimited calls & Free Callertunes on VoizFonica. ").create();

    System.out.println(message.getSid());

	return "sucess";
}


/*
 * 
 * 
 * @GetMapping("/testEmail/{email}")
@CrossOrigin(origins ="http://localhost:4200")
@ResponseBody
public String Subscriber1 (@PathVariable("email") String email) throws MessagingException
{
	System.out.println("TheParsedMailI"+email);
smtpMailSender.send(email, "voiseFonica ", "Your current plan is going to end please recharge to enjoy the servives");

	return "MailSent";
}*/
}




























