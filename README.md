# Adventure-2

JSON files structure:
  
  1.Landlords:
    req = {
        "date" : "20181111",
        "location": {
            "suburb" : "Kingsford",
            "street_unit" : "77 Houston Road"  
        },
        "rooms" : {
          "bathrooms" : "5",
          "bedrooms" : "5",
          "beds_no" : "2"
        },
		    "capacity" : "10",
        "duration" : {
          "minimum_nights" : "2",
          "maximum_nights" : "3"
        },
        "additional_fee" :{
          "cleaning_fee" : "200",
          "extra_fee" : "200"
        }
	  }
  
  
  2.Users:
    req = {
      "location": {
            "suburb" : "Kingsford",
            "street_unit" : "77 Houston Road"  
       },
      "capacity" : "10",
      "room_type" : "private room",
      "price" : "500";
    }
    
   
   
   
  3.Specialists:
    req = {
      "location": {
            "suburb" : "Kingsford",
            "street_unit" : "77 Houston Road"  
       },
       "capacity" : "10"
    };
	
		
