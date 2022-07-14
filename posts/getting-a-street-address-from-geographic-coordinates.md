---
layout: layoutPost
title: 'Getting a Street Address from Geographic Coordinates'
tags: post
date: '2022-06-24'
---

# Getting a Street Address from Geographic Coordinates

Let's say you have a website form that asks for a street address. You might ask your visitor to type in the street address, unit, city, state, and zip. This is tedious, and could lead to innaccurate or mistyped information. We could improve the experience and accuracy by enabling a predictive autocomplete functionality using a Google API. Much better, but what if you want to take nearly all the work out for the visitor, and fill out their address for them?

This post will describe how to get a street address from geographic coordinates - known as reverse geocoding - and prompt a visitor to have the street address form field filled out for them. I'll also create an autocomplete fallback in case a visitor location sharing is disabled, or if geolocation data isn't accurate.

Let's start with the fallback. 

### Enabling autocomplete on an address input field

I'm going to start with some setup and a quick fallback to ensure an address can always be easily and accurately entered into the form. This <a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#javascript" target="_blank" rel="noopener">Places Autocomplete</a> article outlines how to set up a project in your Google Cloud Console to enable the autocomplete function, which we'll also need for our reverse geocoding. Essentially, it boils down to the following:

1. Selecting an existing project or creating a new one.
2. Enabling the Places API.
3. Load the Places API library on your page:
    ```js
    <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap"></script>
    ```
4. Connect the Autocomplete class to your street address input:
    ```js
    <script>
        new google.maps.places.Autocomplete(
            document.getElementById("street-address")
        );
    </script>
    ```

Just add these two script tags to the HTML page where your form exists. Pretty simple, right? Now we can layer on the reverse geocoding.

### Getting a street address from geographic coordinates

You’ll use the same project created in the Google Cloud Console because it involves the same input field used for the autocomplete function, but I’m sure you could use a separate Google Cloud Console project if you wanted.

To get a street address from geographic coordinates, you’ll need to use <a href="https://developers.google.com/maps/documentation/geocoding/overview" target="_blank" rel="noopener">Google’s Geocoding API</a>, and combine that with GeoLocation. We can break this down into three steps.

#### Step 1: Use the GeoLocation API to get a visitor's coordinates 
First we're going to use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank" rel="noopener">GeoLocation API</a> to ask a visitor if we can use their location, and then store those coordinates in a variable for later use. This shows logging the coordinates to the console to be sure we have them.

```js
if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition((position) => {
                    
        // Store the latitude and longitude values as variables
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        // Output the latitude and longtiude to the console
        console.log(position.coords.latitude + "," + position.coords.longitude);

    });
}
```

#### Step 2: Store the Google API reverse geocoding endpoint URL in a variable 
I'm using template literals here to easily reference and include the latitude and longitude variables. An example of how to create this URL can be found on <a href="https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding" target="_blank" rel="noopener">Google’s Reverse Geocoding</a> documentation page. I'm again logging this variable endpoint URL to the console, because we'll need to copy and paste it.

```js
if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition((position) => {
                    
        // Store the latitude and longitude values as variables
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        // Output the latitude and longtiude to the console
        console.log(position.coords.latitude + "," + position.coords.longitude);

        // Store the Google Geocode API endpoint as a variable
        const pos_endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=YOUR_API_KEY`;
        
        // Output the endpoint result
        console.log(pos_endpoint);

    });
}
```

The value you get from from pos_endpoint in this step is really important. Let's take a closer look at it:
```js
const pos_endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=YOUR_API_KEY`;
```

The lat and long template literals turn this URL into something like this:
```html
https://maps.googleapis.com/maps/api/geocode/json?latlng=40.0411599,-76.3061783&key=YOUR_API_KEY
```


If you paste the URL from the console output into your browser, you’ll see that the result is a JSON object. It should look something like this: 
```json
{
    "plus_code" : {
        "compound_code" : "2MRV+FG8 Lancaster, PA, USA",
        "global_code" : "87G52MRV+FG8"
    },
    "results" : [
        {
            "address_components" : [
            {
                "long_name" : "31",
                "short_name" : "31",
                "types" : [ "street_number" ]
            },
            {
                "long_name" : "North Queen Street",
                "short_name" : "N Queen St",
                "types" : [ "route" ]
            },
            {
                "long_name" : "Lancaster",
                "short_name" : "Lancaster",
                "types" : [ "locality", "political" ]
            },
            {
                "long_name" : "Lancaster County",
                "short_name" : "Lancaster County",
                "types" : [ "administrative_area_level_2", "political" ]
            },
            {
                "long_name" : "Pennsylvania",
                "short_name" : "PA",
                "types" : [ "administrative_area_level_1", "political" ]
            },
            {
                "long_name" : "United States",
                "short_name" : "US",
                "types" : [ "country", "political" ]
            },
            {
                "long_name" : "17603",
                "short_name" : "17603",
                "types" : [ "postal_code" ]
            },
            {
                "long_name" : "3838",
                "short_name" : "3838",
                "types" : [ "postal_code_suffix" ]
            }
            ],
            "formatted_address" : "31 N Queen St, Lancaster, PA 17603, USA",
            "geometry" : {
            "location" : {
                "lat" : 40.0413041,
                "lng" : -76.3061934
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
                "northeast" : {
                    "lat" : 40.04265308029149,
                    "lng" : -76.3048444197085
                },
                "southwest" : {
                    "lat" : 40.0399551197085,
                    "lng" : -76.30754238029151
                }
            }
            },
            "place_id" : "ChIJl7o2hO0kxokRA3IWlJHzi_Y",
            "plus_code" : {
            "compound_code" : "2MRV+GG Lancaster, PA, USA",
            "global_code" : "87G52MRV+GG"
            },
            "types" : [ "street_address" ]
        },
    ],
}
```

You may notice that there's a formatted_address key that provides the entire street address, city, state, zip code, and country. Cool! Now all we need to do is parse that JSON data so we can get the precise location data to use for the form. 

#### Step 3: Parse the Geocoded JSON data and prompt the visitor
I'm using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch" target="_blank" rel="noopener">JavaScript fetch() method</a> to parse the JSON data. In this case, I'm getting the formattted_address key value stored in the JSON output, but you could essentially get any location data you wanted. 

Now, you could use this address to just fill out the address field, but that might cause confusion since the visitor didn't initiate it. However, we could add a prompt to see if they would like to use their current address to fill out the form. Here's how we can do it:

- Store the street address input field as a variable, so we can use the value object to fill out the field.
- After fetching the location data, create a new element that sits above the text input and populate it with a message that asks if they want to use their current address. 
    - If yes, hide the prompt, fill out the text field, and style it green so it shows success. 
    - If no, hide the prompt so the visitor can use the autocomplete fallback. 
- If a visitor ignores the prompt and starts to type in the field, hide the prompt.

```js
if ('geolocation' in navigator) {

    // Store the input field as a variable
    const street_address = document.getElementById("street-address");

    // Make sure the street address input exists on the page
    if (street_address !== null) {

        navigator.geolocation.getCurrentPosition((position) => {

            // Store the latitude and longitude values as variables
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            // Output the latitude and longtiude to the console
            console.log(position.coords.latitude + "," + position.coords.longitude);

            // Store the Google Geocode API endpoint as a variable
            const pos_endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=YOUR_API_KEY`;

            // Output the endpoint result
            console.log(pos_endpoint);

            // Parse the JSON response with fetch() and get the data we need
            fetch(pos_endpoint)
                .then(response => response.json())
                .then(data => {

                    // Create an element that will prompt the visitor with their address
                    const is_address = document.createElement('span');
                    is_address.setAttribute('id', 'is-address');
                    street_address.insertAdjacentElement('beforebegin', is_address);

                    // Set the new element with text that shows their address, and allows them to confirm if they want to use it
                    is_address.innerHTML = "It looks like your current address is: " + "&lt;span class='is-address--current'&gt;" + data["results"][0]["formatted_address"] + "&lt;/span&gt;. 
                    Would you like to enter this address? &lt;span class='is_address--yes'&gt;Yes&lt;/span&gt; &lt;span class='is_address--no'>No&lt;/span&gt;";
                    
                    // Store yes and no buttons as variables
                    const is_address__yes = document.querySelector('.is_address--yes');
                    const is_address__no = document.querySelector('.is_address--no');

                    // If "yes" is clicked, hide the prompt, enter the value into the form field, and set the text green
                    is_address__yes.addEventListener("click", () => {
                        is_address.classList.add("--hide");
                        street_address.value = data["results"][0]["formatted_address"];
                        street_address.classList.add('fetching-address--fetched');
                    });
                    
                    // If "no" is clicked, hide the prompt
                    is_address__no.addEventListener("click", () => {
                        is_address.classList.add("--hide");
                    });

                    // If a visitor ignores the prompt and starts typing, hide the prompt
                    street_address.addEventListener("keyup", () => {
                        is_address.classList.add("--hide");
                    })

                });

        }, (error) => {
            if (error.code == error.PERMISSION_DENIED) {
                // Additional error fallback if desired
            }
        });

    }
}
```

That’s it! The latitude and longitude are now reverse geocoded into a street address, and a visitor will be prompted to use that address to fill out the form.


### Putting it together

In the form page HTML, I’ve included the scripts from the above fallback autocomplete function and applied them to the street address field. This will run regardless. If a visitor denies the request for their location, or if the geolocation address isn't correct, they can simply start typing and their address will autocomplete as typed into the field. 

In most cases, if a visitor is at their place of residence, this will save them from typing their street address. Otherwise, they may need to use the autocomplete function to get their actual home address.

