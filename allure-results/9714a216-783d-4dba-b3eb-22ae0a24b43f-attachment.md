# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findlatestcars.spec.ts >> Find Latest Cars >> NEWCAR-001 Verify 5 Popular Cars Are displayed
- Location: tests\findlatestcars.spec.ts:163:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 5
Received: 1
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic:
        - generic [ref=e4]:
          - generic: 
          - link "Home" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Home" [ref=e6]
          - text: 
          - generic: 
          - text:  
        - navigation [ref=e8]:
          - list [ref=e9]:
            - listitem [ref=e10]:
              - generic [ref=e11] [cursor=pointer]:
                - generic: 
                - text: NEWS & REVIEWS
            - listitem [ref=e12]:
              - generic [ref=e13] [cursor=pointer]:
                - generic: 
                - text: NEW CARS
            - listitem [ref=e14]:
              - generic [ref=e15] [cursor=pointer]:
                - generic: 
                - text: NEW BIKES
            - listitem [ref=e16]:
              - generic [ref=e17] [cursor=pointer]:
                - generic: 
                - text: SCOOTERS
            - listitem [ref=e18]:
              - generic [ref=e19] [cursor=pointer]:
                - generic: 
                - text: MORE
        - generic [ref=e21]:
          - textbox "Creta, Community, On Road Price, Ola S1, TVS Bikes" [ref=e22]:
            - /placeholder: Search car or bike
          - button "" [ref=e23] [cursor=pointer]
        - generic [ref=e29] [cursor=pointer]: 
  - generic [ref=e30]:
    - generic [ref=e31]:
      - list [ref=e34]:
        - listitem [ref=e35] [cursor=pointer]:
          - link [ref=e36]:
            - /url: https://www.zigwheels.com/maruti-suzuki-cars/baleno/
        - listitem [ref=e37] [cursor=pointer]:
          - link [ref=e38]:
            - /url: https://www.zigwheels.com/kia-cars/sorento/
        - listitem [ref=e39] [cursor=pointer]:
          - link [ref=e40]:
            - /url: https://www.zigwheels.com/mg-motor-cars/hector-tomahawk-phev/
        - listitem [ref=e41] [cursor=pointer]:
          - link [ref=e42]:
            - /url: https://www.zigwheels.com/news-features/launch-story/breaking-yamaha-r2-launched-in-india-ktm-rc-200-rival-is-finally-here/58217/
        - listitem [ref=e43] [cursor=pointer]:
          - link [ref=e44]:
            - /url: https://www.zigwheels.com/news-features/launch-story/breaking-ather-konarc-launched-in-india/58223/
      - list [ref=e48]:
        - listitem [ref=e49] [cursor=pointer]:
          - link "1" [ref=e50]:
            - /url: "#"
        - listitem [ref=e51] [cursor=pointer]:
          - link "2" [ref=e52]:
            - /url: "#"
        - listitem [ref=e53] [cursor=pointer]:
          - link "3" [ref=e54]:
            - /url: "#"
        - listitem [ref=e55] [cursor=pointer]:
          - link "4" [ref=e56]:
            - /url: "#"
        - listitem [ref=e57] [cursor=pointer]:
          - link "5" [ref=e58]:
            - /url: "#"
    - generic [ref=e59]:
      - heading "Find Your Dream Car or Bike" [level=1] [ref=e60]
      - generic [ref=e63]:
        - textbox "Search car or bike" [ref=e64]
        - button [ref=e66] [cursor=pointer]
  - generic [ref=e68]:
    - generic [ref=e69]:
      - generic [ref=e70]:
        - heading "Browse Cars By" [level=2] [ref=e71]
        - list [ref=e73]:
          - listitem [ref=e74] [cursor=pointer]: Budget
          - listitem [ref=e75] [cursor=pointer]: Brand
          - listitem [ref=e76] [cursor=pointer]: Fuel Type
          - listitem [ref=e77] [cursor=pointer]: Transmission
          - listitem [ref=e78] [cursor=pointer]: Seating Capacity
      - generic [ref=e81]:
        - generic:
          - link "Cars under 4 Lakh" [ref=e82] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-under-4-lakhs
          - link "Cars under 6 Lakh" [ref=e83] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-under-6-lakhs
          - link "Cars under 10 Lakh" [ref=e84] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-under-10-lakhs
          - link "Cars under 15 Lakh" [ref=e85] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-under-15-lakhs
          - link "Cars under 20 Lakh" [ref=e86] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-under-20-lakhs
          - link "Cars under 40 Lakh" [ref=e87] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-under-40-lakhs
          - link "Cars above 40 Lakh" [ref=e88] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newcars/cars-above-40-lakhs
    - generic [ref=e89]:
      - generic [ref=e90]:
        - heading "Browse Bikes By" [level=2] [ref=e91]
        - list [ref=e93]:
          - listitem [ref=e94] [cursor=pointer]: Budget
          - listitem [ref=e95] [cursor=pointer]: Brand
          - listitem [ref=e96] [cursor=pointer]: Displacement
      - generic [ref=e99]:
        - generic:
          - link "Bikes under 70000" [ref=e100] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newbikes/bikes-under-70000
          - link "Bikes under 1 Lakh" [ref=e101] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newbikes/bikes-under-1-lakh
          - link "Bikes under 2 Lakh" [ref=e102] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newbikes/bikes-under-2-lakhs
          - link "Bikes under 5 Lakh" [ref=e103] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newbikes/bikes-under-5-lakhs
          - link "Bikes above 5 Lakh" [ref=e104] [cursor=pointer]:
            - /url: https://www.zigwheels.com/newbikes/bikes-above-5-lakhs
    - generic [ref=e105]:
      - generic [ref=e106]:
        - heading "Latest Auto Updates" [level=2] [ref=e107]
        - list [ref=e111]:
          - listitem [ref=e112] [cursor=pointer]: Latest
          - listitem [ref=e113] [cursor=pointer]: Reviews
          - listitem [ref=e114] [cursor=pointer]: Videos
          - listitem [ref=e115] [cursor=pointer]: Web Stories
      - generic [ref=e116]:
        - generic [ref=e120]:
          - list [ref=e124]:
            - listitem [ref=e125] [cursor=pointer]:
              - 'img "2026 BMW i5 LWB Launched At Rs 79.60 Lakh Onwards: Is This The Best Balance Of Sport, Luxury And Electric?" [ref=e126]'
              - generic [ref=e127]:
                - 'link "2026 BMW i5 LWB Launched At Rs 79.60 Lakh Onwards: Is This The Best..." [ref=e128]':
                  - /url: /news-features/general-news/2026-bmw-i5-lwb-launched-at-rs-79.60-lakh-onwards-is-this-the-best-balance-of-sport-luxury-and-electric/58245/
                - generic [ref=e129]: 7 Sep, 2026 270 views
            - listitem [ref=e131] [cursor=pointer]:
              - img "Kawasaki Z Range Gets New Shades For 2027" [ref=e132]
              - generic [ref=e133]:
                - link "Kawasaki Z Range Gets New Shades For 2027" [ref=e134]:
                  - /url: /news-features/general-news/kawasaki-z-range-gets-new-shades-for-2027/58243/
                - generic [ref=e135]: 7 Sep, 2026 2261 views
            - listitem [ref=e137] [cursor=pointer]:
              - 'img "Volvo EX90 Review: A Mix Of Swedish Quirk And Elegance" [ref=e138]'
              - generic [ref=e139]:
                - 'link "Volvo EX90 Review: A Mix Of Swedish Quirk And Elegance" [ref=e140]':
                  - /url: /news-features/general-news/volvo-ex90-review-a-mix-of-swedish-quirk-and-elegance/58244/
                - generic [ref=e141]: 7 Sep, 2026 464 views
            - listitem [ref=e143] [cursor=pointer]:
              - img "Royal Enfield Himalayan 440 Explained In Some High-Quality Images" [ref=e144]
              - generic [ref=e145]:
                - link "Royal Enfield Himalayan 440 Explained In Some High-Quality Images" [ref=e146]:
                  - /url: /news-features/general-news/royal-enfield-himalayan-440-explained-in-some-high-quality-images/58242/
                - generic [ref=e147]: 6 Sep, 2026 1727 views
            - listitem [ref=e149] [cursor=pointer]:
              - 'img "BREAKING: Royal Enfield Himalayan 750: India Launch & Specifications" [ref=e150]'
              - generic [ref=e151]:
                - 'link "BREAKING: Royal Enfield Himalayan 750: India Launch & Specifications" [ref=e152]':
                  - /url: /news-features/general-news/breaking-royal-enfield-himalayan-750-india-launch-specifications/58241/
                - generic [ref=e153]: 5 Sep, 2026 1898 views
            - listitem [ref=e155] [cursor=pointer]:
              - img "2026 Maruti Suzuki Baleno Facelift Launched At Rs 6.1 Lakh Onwards" [ref=e156]
              - generic [ref=e157]:
                - link "2026 Maruti Suzuki Baleno Facelift Launched At Rs 6.1 Lakh Onwards" [ref=e158]:
                  - /url: /news-features/general-news/2026-maruti-suzuki-baleno-facelift-launched-at-rs-61-lakh-onwards/58240/
                - generic [ref=e159]: 5 Sep, 2026 2754 views
          - link "All News Updates" [ref=e163] [cursor=pointer]:
            - /url: /news
        - text: All
    - generic [ref=e164]:
      - generic [ref=e166]:
        - generic [ref=e167]:
          - heading "New Cars in India" [level=2] [ref=e168]
          - list [ref=e172]:
            - listitem [ref=e173] [cursor=pointer]: Popular
            - listitem [ref=e174] [cursor=pointer]: Latest
            - listitem [ref=e175] [cursor=pointer]: Upcoming
        - list [ref=e184]:
          - listitem [ref=e185] [cursor=pointer]:
            - img "Maruti Brezza" [ref=e186]
            - generic [ref=e187]:
              - link "Maruti Brezza" [ref=e188]:
                - /url: /maruti-suzuki-cars/brezza/
              - generic [ref=e189]: Rs. 7.40 Lakh
          - listitem [ref=e190] [cursor=pointer]:
            - img "Mahindra Scorpio N" [ref=e191]
            - generic [ref=e192]:
              - link "Mahindra Scorpio N" [ref=e193]:
                - /url: /mahindra-cars/scorpio-n/
              - generic [ref=e194]: Rs. 13.69 Lakh
          - listitem [ref=e195] [cursor=pointer]:
            - img "Maruti Baleno" [ref=e196]
            - generic [ref=e197]:
              - link "Maruti Baleno" [ref=e198]:
                - /url: /maruti-suzuki-cars/baleno/
              - generic [ref=e199]: Rs. 6.10 Lakh
          - listitem [ref=e200] [cursor=pointer]:
            - img "Tata Punch" [ref=e201]
            - generic [ref=e202]:
              - link "Tata Punch" [ref=e203]:
                - /url: /tata-cars/punch/
              - generic [ref=e204]: Rs. 5.75 Lakh
          - listitem [ref=e205] [cursor=pointer]:
            - img "Mahindra Scorpio" [ref=e206]
            - generic [ref=e207]:
              - link "Mahindra Scorpio" [ref=e208]:
                - /url: /mahindra-cars/scorpio-classic/
              - generic [ref=e209]: Rs. 13.37 Lakh
      - generic [ref=e211]:
        - generic [ref=e212]:
          - heading "New Cars By Fuel Type" [level=2] [ref=e213]
          - list [ref=e215]:
            - listitem [ref=e216] [cursor=pointer]: Best Mileage
            - listitem [ref=e217] [cursor=pointer]: Electric
            - listitem [ref=e218] [cursor=pointer]: CNG
            - listitem [ref=e219] [cursor=pointer]: Hybrid
        - list [ref=e228]:
          - listitem [ref=e229] [cursor=pointer]:
            - img "Maruti Wagon R tour" [ref=e230]
            - generic [ref=e231]:
              - link "Maruti Wagon R tour" [ref=e232]:
                - /url: /maruti-suzuki-cars/wagon-r-tour/
              - generic [ref=e233]: Rs. 4.99 Lakh
              - generic [ref=e234]: 34 kmpl
          - listitem [ref=e235] [cursor=pointer]:
            - img "Maruti Celerio" [ref=e236]
            - generic [ref=e237]:
              - link "Maruti Celerio" [ref=e238]:
                - /url: /maruti-suzuki-cars/celerio/
              - generic [ref=e239]: Rs. 4.70 Lakh
              - generic [ref=e240]: 34 kmpl
          - listitem [ref=e241] [cursor=pointer]:
            - img "Maruti Dzire Tour S" [ref=e242]
            - generic [ref=e243]:
              - link "Maruti Dzire Tour S" [ref=e244]:
                - /url: /maruti-suzuki-cars/dzire-tour-s/
              - generic [ref=e245]: Rs. 6.24 Lakh
              - generic [ref=e246]: 34 kmpl
          - listitem [ref=e247] [cursor=pointer]:
            - img "Maruti Wagon R" [ref=e248]
            - generic [ref=e249]:
              - link "Maruti Wagon R" [ref=e250]:
                - /url: /maruti-suzuki-cars/wagon-r/
              - generic [ref=e251]: Rs. 4.99 Lakh
              - generic [ref=e252]: 34 kmpl
          - listitem [ref=e253] [cursor=pointer]:
            - img "Maruti Alto K10" [ref=e254]
            - generic [ref=e255]:
              - link "Maruti Alto K10" [ref=e256]:
                - /url: /maruti-suzuki-cars/alto-k10/
              - generic [ref=e257]: Rs. 3.70 Lakh
              - generic [ref=e258]: 33 kmpl
          - listitem [ref=e259] [cursor=pointer]:
            - img "Maruti Dzire" [ref=e260]
            - generic [ref=e261]:
              - link "Maruti Dzire" [ref=e262]:
                - /url: /maruti-suzuki-cars/dzire/
              - generic [ref=e263]: Rs. 6.31 Lakh
              - generic [ref=e264]: 33 kmpl
          - listitem [ref=e265] [cursor=pointer]:
            - img "Maruti Alto Tour H1" [ref=e266]
            - generic [ref=e267]:
              - link "Maruti Alto Tour H1" [ref=e268]:
                - /url: /maruti-suzuki-cars/alto-tour-h1/
              - generic [ref=e269]: Rs. 4.00 Lakh
              - generic [ref=e270]: 33 kmpl
          - listitem [ref=e271] [cursor=pointer]:
            - img "Maruti Swift" [ref=e272]
            - generic [ref=e273]:
              - link "Maruti Swift" [ref=e274]:
                - /url: /maruti-suzuki-cars/swift/
              - generic [ref=e275]: Rs. 5.84 Lakh
              - generic [ref=e276]: 32 kmpl
          - listitem [ref=e277] [cursor=pointer]:
            - img "Maruti S-Presso" [ref=e278]
            - generic [ref=e279]:
              - link "Maruti S-Presso" [ref=e280]:
                - /url: /maruti-suzuki-cars/s-presso/
              - generic [ref=e281]: Rs. 3.50 Lakh
              - generic [ref=e282]: 32 kmpl
          - listitem [ref=e283] [cursor=pointer]:
            - img "Kia Sonet" [ref=e284]
            - generic [ref=e285]:
              - link "Kia Sonet" [ref=e286]:
                - /url: /kia-cars/sonet/
              - generic [ref=e287]: Rs. 7.41 Lakh
              - generic [ref=e288]: 24 kmpl
      - generic [ref=e291]:
        - generic [ref=e292]:
          - heading "New Cars By Body Type" [level=2] [ref=e293]
          - list [ref=e295]:
            - listitem [ref=e296] [cursor=pointer]: SUV
            - listitem [ref=e297] [cursor=pointer]: Hatchback
            - listitem [ref=e298] [cursor=pointer]: Sedan
            - listitem [ref=e299] [cursor=pointer]: MUV
            - listitem [ref=e300] [cursor=pointer]: Luxury
        - list [ref=e309]:
          - listitem [ref=e310] [cursor=pointer]:
            - img "Maruti Brezza" [ref=e311]
            - generic [ref=e312]:
              - link "Maruti Brezza" [ref=e313]:
                - /url: /maruti-suzuki-cars/brezza/
              - generic [ref=e314]: Rs. 7.40 Lakh
          - listitem [ref=e315] [cursor=pointer]:
            - img "Mahindra Scorpio N" [ref=e316]
            - generic [ref=e317]:
              - link "Mahindra Scorpio N" [ref=e318]:
                - /url: /mahindra-cars/scorpio-n/
              - generic [ref=e319]: Rs. 13.69 Lakh
          - listitem [ref=e320] [cursor=pointer]:
            - img "Tata Punch" [ref=e321]
            - generic [ref=e322]:
              - link "Tata Punch" [ref=e323]:
                - /url: /tata-cars/punch/
              - generic [ref=e324]: Rs. 5.75 Lakh
          - listitem [ref=e325] [cursor=pointer]:
            - img "Mahindra Scorpio" [ref=e326]
            - generic [ref=e327]:
              - link "Mahindra Scorpio" [ref=e328]:
                - /url: /mahindra-cars/scorpio-classic/
              - generic [ref=e329]: Rs. 13.37 Lakh
          - listitem [ref=e330] [cursor=pointer]:
            - img "Tata Nexon" [ref=e331]
            - generic [ref=e332]:
              - link "Tata Nexon" [ref=e333]:
                - /url: /tata-cars/nexon/
              - generic [ref=e334]: Rs. 7.40 Lakh
      - insertion
      - generic [ref=e335]:
        - heading "Popular Cars Comparison" [level=2] [ref=e337]
        - list [ref=e344]:
          - listitem [ref=e345] [cursor=pointer]:
            - generic [ref=e346]:
              - generic [ref=e347]:
                - img "Maruti Suzuki FRONX" [ref=e349]
                - generic [ref=e350]: Maruti Suzuki
                - generic [ref=e351]: FRONX
                - generic [ref=e352]: Rs. 6.85 Lakh
              - generic [ref=e353]: vs
              - generic [ref=e354]:
                - img "Maruti Suzuki Baleno" [ref=e356]
                - generic [ref=e357]: Maruti Suzuki
                - generic [ref=e358]: Baleno
                - generic [ref=e359]: Rs. 6.10 Lakh
              - link "FRONX vs Baleno" [ref=e360]:
                - /url: /compare-cars/maruti-suzuki-baleno-vs-maruti-suzuki-fronx
          - listitem [ref=e361] [cursor=pointer]:
            - generic [ref=e362]:
              - generic [ref=e363]:
                - img "Maruti Suzuki Swift" [ref=e365]
                - generic [ref=e366]: Maruti Suzuki
                - generic [ref=e367]: Swift
                - generic [ref=e368]: Rs. 5.84 Lakh
              - generic [ref=e369]: vs
              - generic [ref=e370]:
                - img "Maruti Suzuki Baleno" [ref=e372]
                - generic [ref=e373]: Maruti Suzuki
                - generic [ref=e374]: Baleno
                - generic [ref=e375]: Rs. 6.10 Lakh
              - link "Swift vs Baleno" [ref=e376]:
                - /url: /compare-cars/maruti-suzuki-baleno-vs-maruti-suzuki-swift
          - listitem [ref=e377] [cursor=pointer]:
            - generic [ref=e378]:
              - generic [ref=e379]:
                - img "Hyundai Creta" [ref=e381]
                - generic [ref=e382]: Hyundai
                - generic [ref=e383]: Creta
                - generic [ref=e384]: Rs. 10.91 Lakh
              - generic [ref=e385]: vs
              - generic [ref=e386]:
                - img "Kia Seltos" [ref=e388]
                - generic [ref=e389]: Kia
                - generic [ref=e390]: Seltos
                - generic [ref=e391]: Rs. 11.00 Lakh
              - link "Creta vs Seltos" [ref=e392]:
                - /url: /compare-cars/hyundai-creta-vs-kia-seltos
          - listitem [ref=e393] [cursor=pointer]:
            - generic [ref=e394]:
              - generic [ref=e395]:
                - img "Maruti Suzuki FRONX" [ref=e397]
                - generic [ref=e398]: Maruti Suzuki
                - generic [ref=e399]: FRONX
                - generic [ref=e400]: Rs. 6.85 Lakh
              - generic [ref=e401]: vs
              - generic [ref=e402]:
                - img "Maruti Suzuki Brezza" [ref=e404]
                - generic [ref=e405]: Maruti Suzuki
                - generic [ref=e406]: Brezza
                - generic [ref=e407]: Rs. 7.40 Lakh
              - link "FRONX vs Brezza" [ref=e408]:
                - /url: /compare-cars/maruti-suzuki-brezza-vs-maruti-suzuki-fronx
          - listitem [ref=e409] [cursor=pointer]:
            - generic [ref=e410]:
              - generic [ref=e411]:
                - img "Maruti Suzuki Grand Vitara" [ref=e413]
                - generic [ref=e414]: Maruti Suzuki
                - generic [ref=e415]: Grand Vitara
                - generic [ref=e416]: Rs. 10.77 Lakh
              - generic [ref=e417]: vs
              - generic [ref=e418]:
                - img "Toyota Urban Cruiser Hyryder" [ref=e420]
                - generic [ref=e421]: Toyota
                - generic [ref=e422]: Hyryder
                - generic [ref=e423]: Rs. 11.31 Lakh
              - link "Grand Vitara vs Hyryder" [ref=e424]:
                - /url: /compare-cars/maruti-suzuki-grand-vitara-vs-toyota-hyryder
          - listitem [ref=e425] [cursor=pointer]:
            - generic [ref=e426]:
              - generic [ref=e427]:
                - img "Tata Punch" [ref=e429]
                - generic [ref=e430]: Tata
                - generic [ref=e431]: Punch
                - generic [ref=e432]: Rs. 5.75 Lakh
              - generic [ref=e433]: vs
              - generic [ref=e434]:
                - img "Tata Tiago" [ref=e436]
                - generic [ref=e437]: Tata
                - generic [ref=e438]: Tiago
                - generic [ref=e439]: Rs. 4.77 Lakh
              - link "Punch vs Tiago" [ref=e440]:
                - /url: /compare-cars/tata-punch-vs-tata-tiago
          - listitem [ref=e441] [cursor=pointer]:
            - generic [ref=e442]:
              - generic [ref=e443]:
                - img "Maruti Suzuki Brezza" [ref=e445]
                - generic [ref=e446]: Maruti Suzuki
                - generic [ref=e447]: Brezza
                - generic [ref=e448]: Rs. 7.40 Lakh
              - generic [ref=e449]: vs
              - generic [ref=e450]:
                - img "Hyundai Venue" [ref=e452]
                - generic [ref=e453]: Hyundai
                - generic [ref=e454]: Venue
                - generic [ref=e455]: Rs. 8.00 Lakh
              - link "Brezza vs Venue" [ref=e456]:
                - /url: /compare-cars/hyundai-venue-vs-maruti-suzuki-brezza
          - listitem [ref=e457] [cursor=pointer]:
            - generic [ref=e458]:
              - generic [ref=e459]:
                - img "Toyota Glanza" [ref=e461]
                - generic [ref=e462]: Toyota
                - generic [ref=e463]: Glanza
                - generic [ref=e464]: Rs. 6.73 Lakh
              - generic [ref=e465]: vs
              - generic [ref=e466]:
                - img "Maruti Suzuki Baleno" [ref=e468]
                - generic [ref=e469]: Maruti Suzuki
                - generic [ref=e470]: Baleno
                - generic [ref=e471]: Rs. 6.10 Lakh
              - link "Glanza vs Baleno" [ref=e472]:
                - /url: /compare-cars/maruti-suzuki-baleno-vs-toyota-glanza
          - listitem [ref=e473] [cursor=pointer]:
            - generic [ref=e474]:
              - generic [ref=e475]:
                - img "Kia Sorento" [ref=e477]
                - generic [ref=e478]: Kia
                - generic [ref=e479]: Sorento
                - generic [ref=e480]: Rs. 27.99 Lakh
              - generic [ref=e481]: vs
              - generic [ref=e482]:
                - img "Toyota Innova Hycross" [ref=e484]
                - generic [ref=e485]: Toyota
                - generic [ref=e486]: Innova Hycross
                - generic [ref=e487]: Rs. 18.70 Lakh
              - link "Sorento vs Innova Hycross" [ref=e488]:
                - /url: /compare-cars/kia-sorento-vs-toyota-innova-hycross
          - listitem [ref=e489] [cursor=pointer]:
            - generic [ref=e490]:
              - generic [ref=e491]:
                - img "Skoda Kylaq" [ref=e493]
                - generic [ref=e494]: Skoda
                - generic [ref=e495]: Kylaq
                - generic [ref=e496]: Rs. 7.59 Lakh
              - generic [ref=e497]: vs
              - generic [ref=e498]:
                - img "Skoda Kushaq" [ref=e500]
                - generic [ref=e501]: Skoda
                - generic [ref=e502]: Kushaq
                - generic [ref=e503]: Rs. 10.69 Lakh
              - link "Kylaq vs Kushaq" [ref=e504]:
                - /url: /compare-cars/skoda-kushaq-vs-skoda-kylaq
        - link "Compare More Cars" [ref=e506] [cursor=pointer]:
          - /url: /compare-cars
    - generic [ref=e507]:
      - generic [ref=e509]:
        - generic [ref=e510]:
          - heading "New Bikes And Scooters in India" [level=2] [ref=e511]
          - list [ref=e515]:
            - listitem [ref=e516] [cursor=pointer]: Best Mileage
            - listitem [ref=e517] [cursor=pointer]: Popular
            - listitem [ref=e518] [cursor=pointer]: Latest
            - listitem [ref=e519] [cursor=pointer]: Upcoming
            - listitem [ref=e520] [cursor=pointer]: Scooters
            - listitem [ref=e521] [cursor=pointer]: Electric
        - list [ref=e530]:
          - listitem [ref=e531] [cursor=pointer]:
            - img "Hero Super Splendor XTEC" [ref=e532]
            - generic [ref=e533]:
              - link "Hero Super Splendor XTEC" [ref=e534]:
                - /url: /hero-bikes/super-splendor-xtec/
              - generic [ref=e535]: Rs. 84,448
              - generic [ref=e536]: 72 kmpl
          - listitem [ref=e537] [cursor=pointer]:
            - img "Hero Passion Plus" [ref=e538]
            - generic [ref=e539]:
              - link "Hero Passion Plus" [ref=e540]:
                - /url: /hero-bikes/passion-plus/
              - generic [ref=e541]: Rs. 80,328
              - generic [ref=e542]: 71 kmpl
          - listitem [ref=e543] [cursor=pointer]:
            - img "Hero Splendor Plus XTEC" [ref=e544]
            - generic [ref=e545]:
              - link "Hero Splendor Plus XTEC" [ref=e546]:
                - /url: /hero-bikes/splendor-plus-xtec/
              - generic [ref=e547]: Rs. 81,283
              - generic [ref=e548]: 70 kmpl
          - listitem [ref=e549] [cursor=pointer]:
            - img "Hero Splendor Plus" [ref=e550]
            - generic [ref=e551]:
              - link "Hero Splendor Plus" [ref=e552]:
                - /url: /hero-bikes/splendor-plus/
              - generic [ref=e553]: Rs. 77,777
              - generic [ref=e554]: 70 kmpl
          - listitem [ref=e555] [cursor=pointer]:
            - img "Hero HF Deluxe" [ref=e556]
            - generic [ref=e557]:
              - link "Hero HF Deluxe" [ref=e558]:
                - /url: /hero-bikes/hf-deluxe/
              - generic [ref=e559]: Rs. 59,477
              - generic [ref=e560]: 70 kmpl
          - listitem [ref=e561] [cursor=pointer]:
            - img "Bajaj Platina 110" [ref=e562]
            - generic [ref=e563]:
              - link "Bajaj Platina 110" [ref=e564]:
                - /url: /bajaj-bikes/platina/
              - generic [ref=e565]: Rs. 75,797
              - generic [ref=e566]: 70 kmpl
          - listitem [ref=e567] [cursor=pointer]:
            - img "Bajaj Platina 100" [ref=e568]
            - generic [ref=e569]:
              - link "Bajaj Platina 100" [ref=e570]:
                - /url: /bajaj-bikes/platina-100/
              - generic [ref=e571]: Rs. 72,942
              - generic [ref=e572]: 70 kmpl
          - listitem [ref=e573] [cursor=pointer]:
            - img "Hero HF Deluxe Pro" [ref=e574]
            - generic [ref=e575]:
              - link "Hero HF Deluxe Pro" [ref=e576]:
                - /url: /hero-bikes/hf-deluxe-pro/
              - generic [ref=e577]: Rs. 72,620
              - generic [ref=e578]: 70 kmpl
          - listitem [ref=e579] [cursor=pointer]:
            - img "Bajaj CT 110X" [ref=e580]
            - generic [ref=e581]:
              - link "Bajaj CT 110X" [ref=e582]:
                - /url: /bajaj-bikes/ct110/
              - generic [ref=e583]: Rs. 74,930
              - generic [ref=e584]: 70 kmpl
          - listitem [ref=e585] [cursor=pointer]:
            - img "Hero HF 100" [ref=e586]
            - generic [ref=e587]:
              - link "Hero HF 100" [ref=e588]:
                - /url: /hero-bikes/hf-100/
              - generic [ref=e589]: Rs. 59,839
              - generic [ref=e590]: 70 kmpl
      - generic [ref=e593]:
        - generic [ref=e594]:
          - heading "New Bikes By Body Type" [level=2] [ref=e595]
          - list [ref=e597]:
            - listitem [ref=e598] [cursor=pointer]: Sports
            - listitem [ref=e599] [cursor=pointer]: Cruiser
            - listitem [ref=e600] [cursor=pointer]: Off Road
            - listitem [ref=e601] [cursor=pointer]: Commuter
        - list [ref=e610]:
          - listitem [ref=e611] [cursor=pointer]:
            - img "TVS Raider" [ref=e612]
            - generic [ref=e613]:
              - link "TVS Raider" [ref=e614]:
                - /url: /tvs-bikes/raider/
              - generic [ref=e615]: Rs. 83,910
          - listitem [ref=e616] [cursor=pointer]:
            - img "Yamaha MT 15 Version 2.0" [ref=e617]
            - generic [ref=e618]:
              - link "Yamaha MT 15 Version 2.0" [ref=e619]:
                - /url: /yamaha-bikes/mt-15/
              - generic [ref=e620]: Rs. 1.66 Lakh
          - listitem [ref=e621] [cursor=pointer]:
            - img "Yamaha R15 V4" [ref=e622]
            - generic [ref=e623]:
              - link "Yamaha R15 V4" [ref=e624]:
                - /url: /yamaha-bikes/r15-v4/
              - generic [ref=e625]: Rs. 1.75 Lakh
          - listitem [ref=e626] [cursor=pointer]:
            - img "Bajaj Pulsar NS200" [ref=e627]
            - generic [ref=e628]:
              - link "Bajaj Pulsar NS200" [ref=e629]:
                - /url: /bajaj-bikes/pulsar-200ns/
              - generic [ref=e630]: Rs. 1.38 Lakh
          - listitem [ref=e631] [cursor=pointer]:
            - img "Bajaj Pulsar N160 S" [ref=e632]
            - generic [ref=e633]:
              - link "Bajaj Pulsar N160 S" [ref=e634]:
                - /url: /bajaj-bikes/pulsar-n160-s/
              - generic [ref=e635]: Rs. 1.34 Lakh
      - generic [ref=e638]: Ad
      - generic [ref=e639]:
        - heading "Popular Bikes Comparison" [level=2] [ref=e641]
        - list [ref=e648]:
          - listitem [ref=e649] [cursor=pointer]:
            - generic [ref=e650]:
              - generic [ref=e651]:
                - img "Hero Karizma XMR" [ref=e653]
                - generic [ref=e654]: Hero Moto Corp
                - generic [ref=e655]: Karizma XMR
                - generic [ref=e656]: Rs. 1.87 Lakh
              - generic [ref=e657]: vs
              - generic [ref=e658]:
                - img "Yamaha YZF-R2" [ref=e660]
                - generic [ref=e661]: Yamaha
                - generic [ref=e662]: YZF-R2
                - generic [ref=e663]: Rs. 2.31 Lakh
              - link "Karizma XMR vs YZF-R2" [ref=e664]:
                - /url: /bike-comparison/hero-karizma-xmr-210-vs-yamaha-yzf-r2
          - listitem [ref=e665] [cursor=pointer]:
            - generic [ref=e666]:
              - generic [ref=e667]:
                - img "TVS iQube" [ref=e669]
                - generic [ref=e670]: TVS
                - generic [ref=e671]: iQube
                - generic [ref=e672]: Rs. 1.20 Lakh
              - generic [ref=e673]: vs
              - generic [ref=e674]:
                - img "Ather Konarc" [ref=e676]
                - generic [ref=e677]: Ather Energy
                - generic [ref=e678]: Konarc
                - generic [ref=e679]: Rs. 1.02 Lakh
              - link "iQube vs Konarc" [ref=e680]:
                - /url: /bike-comparison/ather-energy-konarc-vs-tvs-iqube-electric
          - listitem [ref=e681] [cursor=pointer]:
            - generic [ref=e682]:
              - generic [ref=e683]:
                - img "Ather Rizta" [ref=e685]
                - generic [ref=e686]: Ather Energy
                - generic [ref=e687]: Rizta
                - generic [ref=e688]: Rs. 1.22 Lakh
              - generic [ref=e689]: vs
              - generic [ref=e690]:
                - img "Ather Konarc" [ref=e692]
                - generic [ref=e693]: Ather Energy
                - generic [ref=e694]: Konarc
                - generic [ref=e695]: Rs. 1.02 Lakh
              - link "Rizta vs Konarc" [ref=e696]:
                - /url: /bike-comparison/ather-energy-konarc-vs-ather-energy-rizta
          - listitem [ref=e697] [cursor=pointer]:
            - generic [ref=e698]:
              - generic [ref=e699]:
                - img "TVS Orbiter" [ref=e701]
                - generic [ref=e702]: TVS
                - generic [ref=e703]: Orbiter
                - generic [ref=e704]: Rs. 1.01 Lakh
              - generic [ref=e705]: vs
              - generic [ref=e706]:
                - img "Ather Konarc" [ref=e708]
                - generic [ref=e709]: Ather Energy
                - generic [ref=e710]: Konarc
                - generic [ref=e711]: Rs. 1.02 Lakh
              - link "Orbiter vs Konarc" [ref=e712]:
                - /url: /bike-comparison/ather-energy-konarc-vs-tvs-orbiter
          - listitem [ref=e713] [cursor=pointer]:
            - generic [ref=e714]:
              - generic [ref=e715]:
                - img "Royal Enfield Himalayan 450" [ref=e717]
                - generic [ref=e718]: Royal Enfield
                - generic [ref=e719]: Himalayan 450
                - generic [ref=e720]: Rs. 3.08 Lakh
              - generic [ref=e721]: vs
              - generic [ref=e722]:
                - img "Royal Enfield Himalayan 440" [ref=e724]
                - generic [ref=e725]: Royal Enfield
                - generic [ref=e726]: Himalayan 440
                - generic [ref=e727]: Rs. 2.30 Lakh
              - link "Himalayan 450 vs Himalayan 440" [ref=e728]:
                - /url: /bike-comparison/royal-enfield-himalayan-vs-royal-enfield-himalayan-440
          - listitem [ref=e729] [cursor=pointer]:
            - generic [ref=e730]:
              - generic [ref=e731]:
                - img "TVS iQube S" [ref=e733]
                - generic [ref=e734]: TVS
                - generic [ref=e735]: iQube S
                - generic [ref=e736]: Rs. 1.65 Lakh
              - generic [ref=e737]: vs
              - generic [ref=e738]:
                - img "Bajaj Chetak" [ref=e740]
                - generic [ref=e741]: Bajaj
                - generic [ref=e742]: Chetak
                - generic [ref=e743]: Rs. 1.19 Lakh
              - link "iQube S vs Chetak" [ref=e744]:
                - /url: /bike-comparison/bajaj-chetak-vs-tvs-iqube-s
          - listitem [ref=e745] [cursor=pointer]:
            - generic [ref=e746]:
              - generic [ref=e747]:
                - img "Bajaj Pulsar NS160" [ref=e749]
                - generic [ref=e750]: Bajaj
                - generic [ref=e751]: Pulsar NS160
                - generic [ref=e752]: Rs. 1.26 Lakh
              - generic [ref=e753]: vs
              - generic [ref=e754]:
                - img "Bajaj Pulsar N160" [ref=e756]
                - generic [ref=e757]: Bajaj
                - generic [ref=e758]: Pulsar N160
                - generic [ref=e759]: Rs. 1.22 Lakh
              - link "Pulsar NS160 vs Pulsar N160" [ref=e760]:
                - /url: /bike-comparison/bajaj-pulsar-150ns-vs-bajaj-pulsar-n160
          - listitem [ref=e761] [cursor=pointer]:
            - generic [ref=e762]:
              - generic [ref=e763]:
                - img "Royal Enfield Classic 350" [ref=e765]
                - generic [ref=e766]: Royal Enfield
                - generic [ref=e767]: Classic 350
                - generic [ref=e768]: Rs. 1.87 Lakh
              - generic [ref=e769]: vs
              - generic [ref=e770]:
                - img "Royal Enfield Hunter 350" [ref=e772]
                - generic [ref=e773]: Royal Enfield
                - generic [ref=e774]: Hunter 350
                - generic [ref=e775]: Rs. 1.38 Lakh
              - link "Classic 350 vs Hunter 350" [ref=e776]:
                - /url: /bike-comparison/royal-enfield-classic-350-vs-royal-enfield-hunter
          - listitem [ref=e777] [cursor=pointer]:
            - generic [ref=e778]:
              - generic [ref=e779]:
                - img "Royal Enfield Hunter 350" [ref=e781]
                - generic [ref=e782]: Royal Enfield
                - generic [ref=e783]: Hunter 350
                - generic [ref=e784]: Rs. 1.38 Lakh
              - generic [ref=e785]: vs
              - generic [ref=e786]:
                - img "TVS Ronin" [ref=e788]
                - generic [ref=e789]: TVS
                - generic [ref=e790]: Ronin
                - generic [ref=e791]: Rs. 1.30 Lakh
              - link "Hunter 350 vs Ronin" [ref=e792]:
                - /url: /bike-comparison/royal-enfield-hunter-vs-tvs-ronin
          - listitem [ref=e793] [cursor=pointer]:
            - generic [ref=e794]:
              - generic [ref=e795]:
                - img "Royal Enfield Himalayan 450" [ref=e797]
                - generic [ref=e798]: Royal Enfield
                - generic [ref=e799]: Himalayan 450
                - generic [ref=e800]: Rs. 3.08 Lakh
              - generic [ref=e801]: vs
              - generic [ref=e802]:
                - img "Harley-Davidson X440" [ref=e804]
                - generic [ref=e805]: Harley Davidson
                - generic [ref=e806]: X440
                - generic [ref=e807]: Rs. 2.35 Lakh
              - link "Himalayan 450 vs X440" [ref=e808]:
                - /url: /bike-comparison/harley-davidson-x440-vs-royal-enfield-himalayan
        - link "Compare More Bikes" [ref=e810] [cursor=pointer]:
          - /url: /bikes/comparison
    - generic [ref=e812]:
      - heading "Latest User Reviews" [level=2] [ref=e813]
      - generic [ref=e814]:
        - list [ref=e818]:
          - listitem [ref=e819] [cursor=pointer]:
            - generic [ref=e821]:
              - generic [ref=e822]: Honda SP 125
              - generic [ref=e823]: "4.4"
              - text: 393 reviews
            - generic [ref=e824]: Excellent & unbelievable bike
            - paragraph [ref=e826]: Excellent driving experience, excellent milleage, cost minimum, excellent bike excellent cost
            - generic [ref=e828]: "0"
            - generic [ref=e831]: Share
            - generic [ref=e833]:
              - generic [ref=e834]: Pratyush
              - generic [ref=e835]: 22 hours ago
          - listitem [ref=e836] [cursor=pointer]:
            - generic [ref=e838]:
              - generic [ref=e839]: Honda CB300F Flex-Fuel
              - generic [ref=e840]: "4.7"
              - text: 5 reviews
            - generic [ref=e841]: One off the top bike under 2.5 lakh
            - paragraph [ref=e843]: Really very nice bike i have cb300 flex fuel very good bike but i don't know why stopped this model in india, the experience is too good.
            - generic [ref=e845]: "0"
            - generic [ref=e848]: Share
            - generic [ref=e850]:
              - generic [ref=e851]: Anonymous
              - generic [ref=e852]: 1 day ago
          - listitem [ref=e853] [cursor=pointer]:
            - generic [ref=e855]:
              - generic [ref=e856]: Flying Flea C6 (Royal Enfield)
              - generic [ref=e857]: "5.0"
              - text: 3 reviews
            - generic [ref=e858]: Electric shock
            - paragraph [ref=e860]: Bike is looking terrific but single seat look doesn't suit to indian riders where tripling is common means one small family, overall the bike is really good.
            - generic [ref=e862]: "0"
            - generic [ref=e865]: Share
            - generic [ref=e867]:
              - generic [ref=e868]: Parikh
              - generic [ref=e869]: 2 days ago
          - listitem [ref=e870] [cursor=pointer]:
            - generic [ref=e872]:
              - generic [ref=e873]: KTM 390 Duke
              - generic [ref=e874]: "5.0"
            - generic [ref=e875]: Bad poor the features only more performa
            - paragraph [ref=e877]: bad poor the features only more performance and mileage the sound is strong it is good for performance only thankyou
            - generic [ref=e879]: "0"
            - generic [ref=e882]: Share
            - generic [ref=e884]:
              - generic [ref=e885]: Anonymous
              - generic [ref=e886]: 2 days ago
          - listitem [ref=e887] [cursor=pointer]:
            - generic [ref=e889]:
              - generic [ref=e890]: Honda Activa
              - generic [ref=e891]: "4.0"
              - text: 1374 reviews
            - generic [ref=e892]: Best scooty for work and for travel
            - paragraph [ref=e894]: Best scooty for work and for travel best mileage, have so much shape for carrying goods here and there.
            - generic [ref=e896]: "0"
            - generic [ref=e899]: Share
            - generic [ref=e901]:
              - generic [ref=e902]: Himesh
              - generic [ref=e903]: 2 days ago
          - listitem [ref=e904] [cursor=pointer]:
            - generic [ref=e906]:
              - generic [ref=e907]: Bajaj Chetak
              - generic [ref=e908]: "4.8"
              - text: 30 reviews
            - generic [ref=e909]: Super electric scooter
            - paragraph [ref=e911]: This is a great bike in the electric segment. It's very easy to ride and comfortable.
            - generic [ref=e913]: "0"
            - generic [ref=e916]: Share
            - generic [ref=e918]:
              - generic [ref=e919]: Mohammad
              - generic [ref=e920]: 2 days ago
          - listitem [ref=e921] [cursor=pointer]:
            - generic [ref=e923]:
              - generic [ref=e924]: Avore EX2s
              - text: 2 reviews
            - generic [ref=e925]: Design Is the Biggest Attraction
            - paragraph [ref=e927]: The design is what caught my attention first, Specially the tank lights.The overall stance, Body lines and detailing give avore a strong road presence.
            - generic [ref=e929]: "0"
            - generic [ref=e932]: Share
            - generic [ref=e934]:
              - generic [ref=e935]: Rahul
              - generic [ref=e936]: 2 days ago
          - listitem [ref=e937] [cursor=pointer]:
            - generic [ref=e939]:
              - generic [ref=e940]: Avore EX1
              - generic [ref=e941]: "5.0"
            - generic [ref=e942]: Awesome design
            - paragraph [ref=e944]: Amazing designs with tech features and also looks better, overall it will be next leading city commuter ev bike in india.
            - generic [ref=e946]: "0"
            - generic [ref=e949]: Share
            - generic [ref=e951]:
              - generic [ref=e952]: Yogesh
              - generic [ref=e953]: 2 days ago
          - listitem [ref=e954] [cursor=pointer]:
            - generic [ref=e956]:
              - generic [ref=e957]: Bajaj Pulsar 125
              - generic [ref=e958]: "4.7"
              - text: 5 reviews
            - generic [ref=e959]: Driver experience ok mileage okay build
            - paragraph [ref=e961]: Driver experience ok mileage okay build quality ok condition okay best ride no engine fault all 07 service ok
            - generic [ref=e963]: "0"
            - generic [ref=e966]: Share
            - generic [ref=e968]:
              - generic [ref=e969]: Jaibhagawan
              - generic [ref=e970]: 3 days ago
          - listitem [ref=e971] [cursor=pointer]:
            - generic [ref=e973]:
              - generic [ref=e974]: Revolt RV400
              - generic [ref=e975]: "4.1"
              - text: 611 reviews
            - generic [ref=e976]: Good look so cute
            - paragraph [ref=e978]: Good bike looking so cute yah mujhe isi mahine chahiye mujhe sahi datail chahiye is bike ki
            - generic [ref=e980]: "0"
            - generic [ref=e983]: Share
            - generic [ref=e985]:
              - generic [ref=e986]: Golu
              - generic [ref=e987]: 3 days ago
        - link "Read All Reviews" [ref=e990] [cursor=pointer]:
          - /url: /user-reviews
    - generic:
      - generic:
        - link "Review and Win Banner":
          - /url: javascript:;
          - img "Review and Win Banner"
    - generic [ref=e995]:
      - generic [ref=e996]:
        - generic [ref=e997]:
          - img "Largest Community of Car and Bike Owners" [ref=e998]
          - generic [ref=e999]:
            - heading "Join the Zigwheels Community NEW" [level=4] [ref=e1000]:
              - text: Join the Zigwheels Community
              - generic [ref=e1001]: NEW
            - paragraph [ref=e1002]: India's largest automotive community
            - generic [ref=e1003]:
              - list:
                - listitem [ref=e1004]:
                  - link "Explore Now" [ref=e1005] [cursor=pointer]:
                    - /url: /community
        - generic [ref=e1008]:
          - heading "Last Month Top Contributors" [level=3] [ref=e1009]
          - list [ref=e1011]:
            - listitem [ref=e1012] [cursor=pointer]:
              - generic [ref=e1013]:
                - img "userProfile" [ref=e1014]
                - img "crown" [ref=e1015]
              - generic [ref=e1016]:
                - generic [ref=e1017]: Dharmveer
                - generic [ref=e1018]: 5 Reviews 3 Likes
            - listitem [ref=e1019] [cursor=pointer]:
              - generic [ref=e1020]:
                - img "userProfile" [ref=e1021]
                - img "crown" [ref=e1022]
              - generic [ref=e1023]:
                - generic [ref=e1024]: Vikas
                - generic [ref=e1025]: 4 Reviews 4 Likes
            - listitem [ref=e1026] [cursor=pointer]:
              - generic [ref=e1027]:
                - img "userProfile" [ref=e1028]
                - img "crown" [ref=e1029]
              - generic [ref=e1030]:
                - generic [ref=e1031]: Rajesh
                - generic [ref=e1032]: 2 Reviews 2 Likes
            - listitem [ref=e1033]:
              - generic [ref=e1034]: View More
      - generic [ref=e1035]:
        - heading "Latest Questions and Answers" [level=2] [ref=e1036]
        - textbox "Have a question in mind" [ref=e1045]:
          - /placeholder: Type your question
        - generic [ref=e1050]:
          - generic [ref=e1051]:
            - text: Q. Honda dio bs6 front visor price
            - list [ref=e1052]:
              - listitem [ref=e1053]: "For the Honda Dio (2020–2024) front visor price and availability, we recommend contacting your nearest authorized Honda service centre, as prices may vary. Kindly click on the provided link to locate the nearest service centre in your city: https://www.zigwheels.com/bikes/service-centers/honda/Delhi"
          - generic [ref=e1054]:
            - text: Q. Quotation based model
            - list [ref=e1055]:
              - listitem [ref=e1056]: "The Maruti Suzuki Baleno base variant is priced at ₹ 6.10 Lakh (ex-showroom, New Delhi). For the exact on-road price quotation and further assistance, we recommend contacting your nearest authorized dealership. You may click on the provided link to view dealership details based on your city: https://www.zigwheels.com/dealers/maruti-suzuki/Delhi"
          - generic [ref=e1057]:
            - text: Q. I want to buy breeza butvin black colour
            - list [ref=e1058]:
              - listitem [ref=e1059]: "The Maruti Suzuki Brezza is available in 9 colour options, including Lustrous Beige, Lustrous Beige with Bluish Black Roof, Magma Grey, Pearl Arctic White, Pearl Arctic White with Bluish Black Roof, Pearl Bluish Black, Sizzling Red with Bluish Black Roof, Splendid Silver, and Vivacious Orange. Check the real images of each colour to choose the Brezza finish that best suits your style. For availability, booking, and further assistance, we recommend contacting your nearest authorized Maruti Suzuki ARENA dealership. Kindly click on the provided link to locate a dealership in your city: https://www.zigwheels.com/dealers/maruti-suzuki/Delhi"
          - generic [ref=e1062] [cursor=pointer]: More Questions
    - generic [ref=e1063]:
      - heading "Used Cars in India" [level=2] [ref=e1064]
      - generic:
        - list [ref=e1071]:
          - listitem [ref=e1072] [cursor=pointer]:
            - link "New Delhi" [ref=e1073]:
              - /url: /used-car/Delhi
              - text: New Delhi
          - listitem [ref=e1074] [cursor=pointer]:
            - link "Bengaluru" [ref=e1075]:
              - /url: /used-car/Bangalore
              - text: Bengaluru
          - listitem [ref=e1076] [cursor=pointer]:
            - link "Mumbai" [ref=e1077]:
              - /url: /used-car/Mumbai
              - text: Mumbai
          - listitem [ref=e1078] [cursor=pointer]:
            - link "Kolkata" [ref=e1079]:
              - /url: /used-car/Kolkata
              - text: Kolkata
          - listitem [ref=e1080] [cursor=pointer]:
            - link "Chennai" [ref=e1081]:
              - /url: /used-car/Chennai
              - text: Chennai
          - listitem [ref=e1082] [cursor=pointer]:
            - link "Pune" [ref=e1083]:
              - /url: /used-car/Pune
              - text: Pune
          - listitem [ref=e1084] [cursor=pointer]:
            - link "Patna" [ref=e1085]:
              - /url: /used-car/Patna
              - text: Patna
          - listitem [ref=e1086] [cursor=pointer]:
            - link "Jaipur" [ref=e1087]:
              - /url: /used-car/Jaipur
              - text: Jaipur
          - listitem [ref=e1088] [cursor=pointer]:
            - link "Ahmedabad" [ref=e1089]:
              - /url: /used-car/Ahmedabad
              - text: Ahmedabad
          - listitem [ref=e1090] [cursor=pointer]:
            - link "Hyderabad" [ref=e1091]:
              - /url: /used-car/Hyderabad
              - text: Hyderabad
        - textbox "Search your City" [ref=e1097]
  - contentinfo [ref=e1098]:
    - text:     
    - generic [ref=e1100]:
      - list [ref=e1101]:
        - listitem [ref=e1102]:
          - link "About Us" [ref=e1103] [cursor=pointer]:
            - /url: /aboutus
        - listitem [ref=e1104]:
          - generic [ref=e1105] [cursor=pointer]: Advertise with us
        - listitem [ref=e1106]:
          - link "contact us" [ref=e1107] [cursor=pointer]:
            - /url: /contactus
      - list [ref=e1108]:
        - listitem [ref=e1109]:
          - link "Terms of use" [ref=e1110] [cursor=pointer]:
            - /url: /termsofuse
        - listitem [ref=e1111]:
          - link "privacy policy" [ref=e1112] [cursor=pointer]:
            - /url: /privacypolicy
        - listitem [ref=e1113]:
          - generic [ref=e1114] [cursor=pointer]: feedback
      - generic [ref=e1115]:
        - generic [ref=e1116]:
          - img "zig-logo" [ref=e1118] [cursor=pointer]
          - list [ref=e1119]:
            - listitem [ref=e1120]:
              - link "" [ref=e1121] [cursor=pointer]:
                - /url: https://www.facebook.com/zigwheels
                - generic [ref=e1122]: 
            - listitem [ref=e1123]:
              - link "" [ref=e1124] [cursor=pointer]:
                - /url: https://x.com/zigwheels
                - generic [ref=e1125]: 
            - listitem [ref=e1126]:
              - link "" [ref=e1127] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCjmjWp38PCg15Z5ZS-tmpfw
                - generic [ref=e1128]: 
            - listitem [ref=e1129]:
              - link "" [ref=e1130] [cursor=pointer]:
                - /url: https://www.instagram.com/zigwheels
                - generic [ref=e1131]: 
            - listitem [ref=e1132]:
              - link "" [ref=e1133] [cursor=pointer]:
                - /url: https://in.linkedin.com/company/zigwheels
                - generic [ref=e1134]: 
        - generic [ref=e1135]:
          - text: Download ZigWheels app
          - generic [ref=e1136]:
            - generic [ref=e1137]: "4.6"
            - generic [ref=e1138]: 
            - generic [ref=e1139]: User Rating
            - generic [ref=e1140]: 10 Lakh+
            - generic [ref=e1141]: Download
        - generic:
          - img "appimg"
          - img "appimg"
    - generic [ref=e1143]: © 2008-2026 Girnar Software Pvt. Ltd. All rights Reserved.
```

# Test source

```ts
  38  | 
  39  |  }
  40  | 
  41  |  async verifyNewCarsSubMenu() {
  42  |     await expect(
  43  |         this.page.locator(this.locators.findNewCars)
  44  |     ).toBeVisible();
  45  | 
  46  | }
  47  | 
  48  | async verifyNewCarsSubMenuNotVisible() {
  49  |     await expect(
  50  |         this.page.locator(this.locators.findNewCars)
  51  |     ).not.toBeVisible();
  52  | }
  53  | 
  54  | async clickSearchNewCars() {
  55  |     await this.click(this.locators.findNewCars);
  56  | }
  57  | 
  58  | 
  59  | async clickOnZigwheelsLog() {
  60  | 
  61  |     await this.page.getByRole('link', { name: 'Zigwheels' }).click();
  62  | }
  63  | 
  64  | 
  65  | async findLatestCars() {
  66  |   await this.hover(this.locators.newCarsMenu);
  67  | 
  68  |   console.log("newCarsMenu:", this.locators.newCarsMenu);
  69  |   console.log("findNewCars:", this.locators.findNewCars);
  70  | 
  71  |   await this.click(this.locators.findNewCars);
  72  |   await this.page.waitForURL(/.*newcars.*/);
  73  | }
  74  | async searchCar(carName: string) {
  75  |     await this.type(alllocators.Search.SearchBox, carName);
  76  |     await this.click(alllocators.Search.SearchBox);
  77  | }
  78  | async selectSearchSuggestion(carName: string) {
  79  |     await this.page
  80  |         .getByText(carName, { exact: true })
  81  |         .first()
  82  |         .click();
  83  |         
  84  | }
  85  | async verifySuggestionNotVisible(carName: string) {
  86  |     await expect(
  87  |         this.page.getByText(carName, { exact: true }).first()
  88  |     ).not.toBeVisible();
  89  | }
  90  | async clearSearch() {
  91  |     await this.click(alllocators.Search.ClearSearch);
  92  |     
  93  | }
  94  | async verifySearchBoxEmpty() {
  95  |     await expect(
  96  |         this.page.locator(alllocators.Search.SearchBox)
  97  |     ).toHaveValue('');
  98  | }
  99  | async verifySearchSuggestion(carName: string) {
  100 |     await expect(
  101 |         this.page.getByText(carName, { exact: true }).first()
  102 |     ).toBeVisible();
  103 | }
  104 | 
  105 | async verifyAllBudgetBoxes() {
  106 | 
  107 |     const budgetBoxes = this.page.locator(
  108 |         alllocators.NewCarsPage.carBudgetBoxes
  109 |     );
  110 | 
  111 |     const count = await budgetBoxes.count();
  112 | 
  113 |     for (let i = 0; i < count; i++) {
  114 |         await expect(budgetBoxes.nth(i)).toBeVisible();
  115 |     }
  116 | }
  117 | async clickBudgetBox(index: number) {
  118 | 
  119 |     const budgetBoxes = this.page.locator(
  120 |         alllocators.NewCarsPage.carBudgetBoxes
  121 |     );
  122 | 
  123 |     console.log("Current URL:", await this.page.url());
  124 |     console.log("Budget boxes count:", await budgetBoxes.count());
  125 |     
  126 | console.log(await budgetBoxes.allTextContents());
  127 |     await budgetBoxes.nth(index).click();
  128 | 
  129 | }
  130 | async verifyPopularCarsSection() {
  131 |   const popularCars =
  132 |     this.page.locator(
  133 |       alllocators.NewCarsPage.NewCarInIndia_PopularCars
  134 |     );
  135 | 
  136 |   const count = await popularCars.count();
  137 | 
> 138 |   expect(count).toBe(5);
      |                 ^ Error: expect(received).toBe(expected) // Object.is equality
  139 | }
  140 | 
  141 | }
```