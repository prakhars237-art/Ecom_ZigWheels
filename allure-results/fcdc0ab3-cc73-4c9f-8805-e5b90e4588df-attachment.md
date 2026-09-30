# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findlatestcars.spec.ts >> Find Latest Cars >> BUDGET-002 Verify all budget boxes navigation
- Location: tests\findlatestcars.spec.ts:149:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/newcars\/cars-under-201-lakhs/
Received string:  "https://www.zigwheels.com/newcars/cars-under-20-lakhs"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://www.zigwheels.com/newcars/cars-under-20-lakhs"

```

```yaml
- banner:
  - link "Home":
    - /url: /
    - img "Home"
  - navigation:
    - list:
      - listitem:  NEWS & REVIEWS
      - listitem:  NEW CARS
      - listitem:  NEW BIKES
      - listitem:  SCOOTERS
      - listitem:  MORE
  - textbox "Creta, Community, On Road Price, Ola S1, TVS Bikes":
    - /placeholder: Search car or bike
  - button ""
  - text: 
- iframe
- main:
  - heading "Cars Under 20 Lakhs in India (2026)" [level=1]
  - paragraph: "Last Updated: September 7, 2026"
  - paragraph: 48 cars are available under ₹20 lakhs in India, led by the Mahindra Scorpio N (₹13.69 lakh), Mahindra Scorpio (₹13.37 lakh) and Tata Sierra (₹11.49 lakh). EVs like the Mahindra BE 6 become a mainstream option at this budget alongside SUVs and three-row MPVs, giving buyers a genuine choice between electric and combustion.
  - group: ... Read More
  - heading "Top Cars Under 20 Lakhs in India" [level=2]
  - list:
    - listitem "Mahindra Scorpio N":
      - img "Mahindra Scorpio N"
      - link "Mahindra Scorpio N":
        - /url: https://www.zigwheels.com/mahindra-cars/scorpio-n/
      - text: ₹ 13.69 Lakh 1997 - 2198 CC ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mahindra-cars/scorpio-n/on-road-price-delhi/
      - text: "EMI : ₹26,483"
      - link "4.9 | 18 reviews":
        - /url: /user-reviews/mahindra/scorpio-n
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Mahindra Scorpio":
      - img "Mahindra Scorpio"
      - link "Mahindra Scorpio":
        - /url: https://www.zigwheels.com/mahindra-cars/scorpio-classic/
      - text: ₹ 13.37 Lakh 2184 CC ● 14 kmpl ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mahindra-cars/scorpio-classic/on-road-price-delhi/
      - text: "EMI : ₹25,858"
      - link "4.4 | 174 reviews":
        - /url: /user-reviews/mahindra/scorpio-classic
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Tata Sierra":
      - img "Tata Sierra"
      - link "Tata Sierra":
        - /url: https://www.zigwheels.com/tata-cars/sierra/
      - text: ₹ 11.49 Lakh 1497 - 1498 CC ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/tata-cars/sierra/on-road-price-delhi/
      - text: "EMI : ₹22,227"
      - link "4.7 | 29 reviews":
        - /url: /user-reviews/tata/sierra
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Mahindra Thar":
      - img "Mahindra Thar"
      - link "Mahindra Thar":
        - /url: https://www.zigwheels.com/mahindra-cars/thar/
      - text: ₹ 10.32 Lakh 1497 - 2184 CC ● 11 kmpl ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mahindra-cars/thar/on-road-price-delhi/
      - text: "EMI : ₹19,964"
      - link "4.3 | 269 reviews":
        - /url: /user-reviews/mahindra/thar
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Hyundai Creta":
      - img "Hyundai Creta"
      - link "Hyundai Creta":
        - /url: https://www.zigwheels.com/hyundai-cars/creta/
      - text: ₹ 10.91 Lakh 1482 - 1497 CC ● 21 kmpl ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/hyundai-cars/creta/on-road-price-delhi/
      - text: "EMI : ₹21,099"
      - link "4.5 | 115 reviews":
        - /url: /user-reviews/hyundai/creta
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Kia Seltos":
      - img "Kia Seltos"
      - link "Kia Seltos":
        - /url: https://www.zigwheels.com/kia-cars/seltos/
      - text: ₹ 11.00 Lakh 1482 - 1497 CC ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/kia-cars/seltos/on-road-price-delhi/
      - text: "EMI : ₹21,277"
      - link "4.3 | 56 reviews":
        - /url: /user-reviews/kia/seltos
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "MG Hector":
      - img "MG Hector"
      - link "MG Hector":
        - /url: https://www.zigwheels.com/mg-motor-cars/hector/
      - text: ₹ 11.99 Lakh 1451 CC ● 12 kmpl ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mg-motor-cars/hector/on-road-price-delhi/
      - text: "EMI : ₹23,194"
      - link "4 | 97 reviews":
        - /url: /user-reviews/mg-motor/hector
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Mahindra BE 6":
      - img "Mahindra BE 6"
      - link "Mahindra BE 6":
        - /url: https://www.zigwheels.com/mahindra-cars/be-6/
      - text: ₹ 19.45 Lakh 228 - 282bhp ● 548 km - 683 km ● Electric
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mahindra-cars/be-6/on-road-price-delhi/
      - text: "EMI : ₹37,625"
      - link "4.9 | read reviews":
        - /url: /user-reviews/mahindra/be-6
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Maruti Suzuki e Vitara":
      - img "Maruti Suzuki e Vitara"
      - link "Maruti Suzuki e Vitara":
        - /url: https://www.zigwheels.com/maruti-suzuki-cars/e-vitara/
      - text: ₹ 16.19 Lakh 142 - 172bhp ● 440 km - 543 km ● Electric
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/maruti-suzuki-cars/e-vitara/on-road-price-delhi/
      - text: "EMI : ₹31,319"
      - link "4.7 | read reviews":
        - /url: /user-reviews/maruti-suzuki/e-vitara
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Mahindra Thar ROXX":
      - img "Mahindra Thar ROXX"
      - link "Mahindra Thar ROXX":
        - /url: https://www.zigwheels.com/mahindra-cars/thar-roxx/
      - text: ₹ 12.52 Lakh 1997 - 2184 CC ● 15 kmpl ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mahindra-cars/thar-roxx/on-road-price-delhi/
      - text: "EMI : ₹24,219"
      - link "4.4 | 41 reviews":
        - /url: /user-reviews/mahindra/thar-roxx
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Toyota Innova Crysta":
      - img "Toyota Innova Crysta"
      - link "Toyota Innova Crysta":
        - /url: https://www.zigwheels.com/toyota-cars/innova-crysta/
      - text: ₹ 19.72 Lakh 2393 CC ● 11 kmpl ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/toyota-cars/innova-crysta/on-road-price-delhi/
      - text: "EMI : ₹38,147"
      - link "4.5 | 74 reviews":
        - /url: /user-reviews/toyota/innova-crysta
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Toyota Urban Cruiser Hyryder":
      - img "Toyota Urban Cruiser Hyryder"
      - link "Toyota Urban Cruiser Hyryder":
        - /url: https://www.zigwheels.com/toyota-cars/hyryder/
      - text: ₹ 11.31 Lakh 1462 - 1490 CC ● 27 kmpl ● Petrol ● CNG
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/toyota-cars/hyryder/on-road-price-delhi/
      - text: "EMI : ₹21,879"
      - link "4.3 | 140 reviews":
        - /url: /user-reviews/toyota/hyryder
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Hyundai Verna":
      - img "Hyundai Verna"
      - link "Hyundai Verna":
        - /url: https://www.zigwheels.com/hyundai-cars/verna/
      - text: ₹ 10.99 Lakh 1482 - 1497 CC ● Petrol
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/hyundai-cars/verna/on-road-price-delhi/
      - text: "EMI : ₹21,263"
      - link "4.6 | 36 reviews":
        - /url: /user-reviews/hyundai/verna
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Mahindra XUV 7XO":
      - img "Mahindra XUV 7XO"
      - link "Mahindra XUV 7XO":
        - /url: https://www.zigwheels.com/mahindra-cars/xuv-7xo/
      - text: ₹ 13.99 Lakh 1997 - 2184 CC ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/mahindra-cars/xuv-7xo/on-road-price-delhi/
      - text: "EMI : ₹27,063"
      - link "4.6 | read reviews":
        - /url: /user-reviews/mahindra/xuv-7xo
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Tata Harrier":
      - img "Tata Harrier"
      - link "Tata Harrier":
        - /url: https://www.zigwheels.com/tata-cars/harrier/
      - text: ₹ 13.00 Lakh 1498 - 1956 CC ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/tata-cars/harrier/on-road-price-delhi/
      - text: "EMI : ₹25,148"
      - link "4.5 | 73 reviews":
        - /url: /user-reviews/tata/harrier
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Volkswagen Virtus":
      - img "Volkswagen Virtus"
      - link "Volkswagen Virtus":
        - /url: https://www.zigwheels.com/volkswagen-cars/virtus/
      - text: ₹ 10.50 Lakh 999 - 1498 CC ● 18 kmpl ● Petrol
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/volkswagen-cars/virtus/on-road-price-delhi/
      - text: "EMI : ₹20,310"
      - link "4.6 | 94 reviews":
        - /url: /user-reviews/volkswagen/virtus
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Maruti Suzuki Victoris":
      - img "Maruti Suzuki Victoris"
      - link "Maruti Suzuki Victoris":
        - /url: https://www.zigwheels.com/maruti-suzuki-cars/victoris/
      - text: ₹ 10.50 Lakh 1462 - 1490 CC ● 28 kmpl ● Petrol ● CNG
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/maruti-suzuki-cars/victoris/on-road-price-delhi/
      - text: "EMI : ₹20,310"
      - link "4.5 | read reviews":
        - /url: /user-reviews/maruti-suzuki/victoris
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Skoda Slavia":
      - img "Skoda Slavia"
      - link "Skoda Slavia":
        - /url: https://www.zigwheels.com/skoda-cars/slavia/
      - text: ₹ 10.00 Lakh 999 - 1498 CC ● 18 kmpl ● Petrol
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/skoda-cars/slavia/on-road-price-delhi/
      - text: "EMI : ₹19,343"
      - link "4.3 | 111 reviews":
        - /url: /user-reviews/skoda/slavia
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Toyota Innova Hycross":
      - img "Toyota Innova Hycross"
      - link "Toyota Innova Hycross":
        - /url: https://www.zigwheels.com/toyota-cars/innova-hycross/
      - text: ₹ 18.70 Lakh 1987 CC ● 16 kmpl ● Petrol
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/toyota-cars/innova-hycross/on-road-price-delhi/
      - text: "EMI : ₹36,174"
      - link "4.5 | 60 reviews":
        - /url: /user-reviews/toyota/innova-hycross
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
    - listitem "Tata Safari":
      - img "Tata Safari"
      - link "Tata Safari":
        - /url: https://www.zigwheels.com/tata-cars/safari/
      - text: ₹ 13.40 Lakh 1498 - 1956 CC ● Petrol ● Diesel
      - link "Check On Road Price":
        - /url: https://www.zigwheels.com/tata-cars/safari/on-road-price-delhi/
      - text: "EMI : ₹25,921"
      - link "4.6 | 70 reviews":
        - /url: /user-reviews/tata/safari
      - table:
        - rowgroup:
          - row "Compare":
            - cell "Compare":
              - checkbox
              - text: Compare
  - text: View More Cars
  - list:
    - listitem: Cars by Budget
    - listitem: Body Style
    - listitem: Engine Displacement
  - link "Under 4 Lakh":
    - /url: /newcars/cars-under-4-lakhs
  - link "Under 5 Lakh":
    - /url: /newcars/cars-under-5-lakhs
  - link "Under 6 Lakh":
    - /url: /newcars/cars-under-6-lakhs
  - link "Under 8 Lakh":
    - /url: /newcars/cars-under-8-lakhs
  - link "Under 10 Lakh":
    - /url: /newcars/cars-under-10-lakhs
  - link "Under 15 Lakh":
    - /url: /newcars/cars-under-15-lakhs
  - link "Under 40 Lakh":
    - /url: /newcars/cars-under-40-lakhs
  - link "Above 40 Lakh":
    - /url: /newcars/cars-above-40-lakhs
  - link "More Options":
    - /url: /new_car_search.html
  - heading "Upcoming Cars Under 20 Lakhs" [level=2]
  - list:
    - listitem:
      - img "Mahindra Scorpio Lifestyler"
      - link "Mahindra Scorpio Lifestyler":
        - /url: https://www.zigwheels.com/mahindra-cars/scorpio-lifestyler/
      - text: "Rs. 19.79 Lakh Expected Launch : Apr 2027"
    - listitem:
      - img "Maruti Jimny EV"
      - link "Maruti Jimny EV":
        - /url: https://www.zigwheels.com/maruti-suzuki-cars/jimny-ev/
      - text: "Rs. 18.00 Lakh Expected Launch : Jan 2028"
    - listitem:
      - img "Honda Elevate EV"
      - link "Honda Elevate EV":
        - /url: https://www.zigwheels.com/honda-cars/elevate-ev/
      - text: "Rs. 18.00 Lakh Expected Launch : Unrevealed"
    - listitem:
      - img "BYD Atto 2"
      - link "BYD Atto 2":
        - /url: https://www.zigwheels.com/byd-cars/atto-2/
      - text: "Rs. 17.00 Lakh Expected Launch : Unrevealed"
    - listitem:
      - img "Audi A1"
      - link "Audi A1":
        - /url: https://www.zigwheels.com/audi-cars/a1/
      - text: "Rs. 19.00 Lakh Expected Launch : Unrevealed"
  - heading "Top Car Brands in India" [level=2]
  - list:
    - listitem:
      - link "Maruti Suzuki":
        - /url: /maruti-suzuki-cars/
        - img
        - text: Maruti Suzuki
    - listitem:
      - link "Tata":
        - /url: /tata-cars/
        - img
        - text: Tata
    - listitem:
      - link "Kia":
        - /url: /kia-cars/
        - img
        - text: Kia
    - listitem:
      - link "Toyota":
        - /url: /toyota-cars/
        - img
        - text: Toyota
    - listitem:
      - link "Hyundai":
        - /url: /hyundai-cars/
        - img
        - text: Hyundai
    - listitem:
      - link "Mahindra":
        - /url: /mahindra-cars/
        - img
        - text: Mahindra
    - listitem:
      - link "Honda":
        - /url: /honda-cars/
        - img
        - text: Honda
    - listitem:
      - link "MG Motor":
        - /url: /mg-motor-cars/
        - img
        - text: MG Motor
    - listitem:
      - link "Skoda":
        - /url: /skoda-cars/
        - img
        - text: Skoda
    - listitem:
      - link "Renault":
        - /url: /renault-cars/
        - img
        - text: Renault
    - listitem:
      - link "Nissan":
        - /url: /nissan-cars/
        - img
        - text: Nissan
    - listitem:
      - link "Volkswagen":
        - /url: /volkswagen-cars/
        - img
        - text: Volkswagen
    - listitem:
      - link "All Car Brands":
        - /url: /newcars#manufacturers
  - heading "Cars Under 20 Lakhs FAQs" [level=2]
  - heading "What are the popular cars under 20 lakhs?" [level=3]
  - text: The popular cars under 20 lakhs are Mahindra Scorpio N (₹13.69 Lakh), Mahindra Scorpio (₹13.37 Lakh), Tata Sierra (₹11.49 Lakh), Mahindra Thar (₹10.32 Lakh).
  - heading "What are the best mileage cars under 20 lakhs?" [level=3]
  - text: The best mileage cars under 20 lakhs are Maruti Suzuki Victoris (28 kmpl), Toyota Urban Cruiser Hyryder (27 kmpl), Maruti Suzuki Grand Vitara (27 kmpl).
  - heading "What are the best SUV cars under 20 lakhs?" [level=3]
  - text: The best SUV cars under 20 lakhs are Honda Elevate, Mahindra Thar ROXX, Mahindra Scorpio.
  - heading "What are the best sedan cars under 20 lakhs?" [level=3]
  - text: The best sedan cars under 20 lakhs are Volkswagen Virtus, Skoda Slavia, Honda City.
  - heading "What are the best diesel cars under 20 lakhs?" [level=3]
  - text: The best diesel cars under 20 lakhs are Hyundai Alcazar, Jeep Compass, Mahindra Marazzo.
  - heading "News of Cars Under 20 Lakhs" [level=2]
  - article:
    - 'link "Mahindra Thar Roxx vs Scorpio N: Why Character Still Wins"':
      - /url: /news-features/general-news/mahindra-thar-roxx-vs-scorpio-n-why-character-still-wins/58163/
    - text: By Tirth Pandya 10 Aug, 2026 11985 views
    - figure:
      - 'img "Mahindra Thar Roxx vs Scorpio N: Why Character Still Wins"'
  - article:
    - link "2026 Mahindra Scorpio N Facelift Launched With Minor Styling Upgrades And New Features!":
      - /url: /news-features/general-news/2026-mahindra-scorpio-n-facelift-launched-with-minor-styling-upgrades-and-new-features/58147/
    - text: By Ved 5 Aug, 2026 3166 views
    - figure:
      - img "2026 Mahindra Scorpio N Facelift Launched With Minor Styling Upgrades And New Features!"
  - article:
    - 'link "Kia Seltos vs Renault Duster: The Compact SUV War!"':
      - /url: /news-features/general-news/kia-seltos-vs-renault-duster-the-compact-suv-war/58020/
    - text: By Ashin 27 Jun, 2026 1378 views
    - figure:
      - 'img "Kia Seltos vs Renault Duster: The Compact SUV War!"'
  - article:
    - link "Kia Seltos Achieves 5-stars At BNCAP! Crash Test Scores Fully Analysed Here…":
      - /url: /news-features/general-news/kia-seltos-achieves-5-stars-at-bncap-crash-test-scores-fully-analysed-here/57774/
    - text: By Ved 30 Mar, 2026 1175 views
    - figure:
      - img "Kia Seltos Achieves 5-stars At BNCAP! Crash Test Scores Fully Analysed Here…"
  - iframe
  - heading "Popular Cars" [level=2]
  - list:
    - listitem:
      - img "Mahindra Scorpio N"
      - link "Scorpio N":
        - /url: /mahindra-cars/scorpio-n/
      - text: Rs. 13.69 Lakh 2198 CC | Diesel
    - listitem:
      - img "Maruti Suzuki Brezza"
      - link "Brezza":
        - /url: /maruti-suzuki-cars/brezza/
      - text: Rs. 7.40 Lakh 1462 CC | 20 kmpl | Petrol
    - listitem:
      - img "Tata Nexon"
      - link "Nexon":
        - /url: /tata-cars/nexon/
      - text: Rs. 7.40 Lakh 1199 CC | 17 kmpl | Petrol
    - listitem:
      - img "Tata Punch"
      - link "Punch":
        - /url: /tata-cars/punch/
      - text: Rs. 5.75 Lakh 1199 CC | CNG
    - listitem:
      - img "Mahindra Scorpio"
      - link "Scorpio":
        - /url: /mahindra-cars/scorpio-classic/
      - text: Rs. 13.37 Lakh 2184 CC | 14 kmpl | Diesel
  - link "All Popular Cars":
    - /url: /newcars/best-cars-in-india
  - heading "Best Cars by Body Type" [level=2]
  - list:
    - listitem:
      - link "Hatchback":
        - /url: /newcars/best-hatchback-cars
    - listitem:
      - link "SUVs":
        - /url: /newcars/best-suv-cars
    - listitem:
      - link "Sedans":
        - /url: /newcars/best-sedan-cars
    - listitem:
      - link "Luxury":
        - /url: /newcars/best-luxury-cars
    - listitem:
      - link "Electric":
        - /url: /newcars/electric-cars
  - heading "Choose Different Budget" [level=2]
  - list:
    - listitem:
      - link "Cars Under 4 Lakh":
        - /url: /newcars/cars-under-4-lakhs
    - listitem:
      - link "Cars Under 5 Lakh":
        - /url: /newcars/cars-under-5-lakhs
    - listitem:
      - link "Cars Under 6 lakh":
        - /url: /newcars/cars-under-6-lakhs
    - listitem:
      - link "Cars Under 8 Lakh":
        - /url: /newcars/cars-under-8-lakhs
    - listitem:
      - link "Cars Under 10 Lakh":
        - /url: /newcars/cars-under-10-lakhs
    - listitem:
      - link "Cars Under 15 Lakh":
        - /url: /newcars/cars-under-15-lakhs
    - listitem:
      - link "Cars Under 40 Lakh":
        - /url: /newcars/cars-under-40-lakhs
    - listitem:
      - link "Cars Above 40 Lakh":
        - /url: /newcars/cars-above-40-lakhs
  - heading "Latest Expert Reviews on Cars Under 20 Lakhs" [level=2]
  - article:
    - 'link "Mahindra Scorpio Classic Review: The OG Big Daddy!"':
      - /url: /reviews-advice/reviews/mahindra-scorpio-classic-review-the-og-big-daddy/54663/
    - text: By Yashein Kewalramani 25 Oct, 2024 2952 views
    - figure:
      - 'img "Mahindra Scorpio Classic Review: The OG Big Daddy!"'
  - article:
    - 'link "2024 Hyundai Creta Facelift vs Rivals: Which Compact SUV Shines On The Road?"':
      - /url: /reviews-advice/reviews/2024-hyundai-creta-facelift-vs-rivals-which-compact-suv-shines-on-the-road/53162/
    - text: By Aniruthan Srithar 27 May, 2024 3158 views
    - figure:
      - 'img "2024 Hyundai Creta Facelift vs Rivals: Which Compact SUV Shines On The Road?"'
  - article:
    - 'link "Hyundai Creta 2024 Review: First Drive"':
      - /url: /reviews-advice/reviews/hyundai-creta-2024-review-first-drive/51960/
    - text: By Arun Shenoy 17 Jan, 2024 5065 views
    - figure:
      - 'img "Hyundai Creta 2024 Review: First Drive"'
- list:
  - listitem:
    - link "Home":
      - /url: https://www.zigwheels.com
    - text: ›
  - listitem:
    - link "New Cars":
      - /url: /newcars
    - text: ›
  - listitem: Cars Under 20 Lakhs
- contentinfo:
  - list:
    - listitem:
      - link "About Us":
        - /url: /aboutus
    - listitem: Advertise with us
    - listitem:
      - link "contact us":
        - /url: /contactus
  - list:
    - listitem:
      - link "Terms of use":
        - /url: /termsofuse
    - listitem:
      - link "privacy policy":
        - /url: /privacypolicy
    - listitem: feedback
  - img "zig-logo"
  - list:
    - listitem:
      - link "":
        - /url: https://www.facebook.com/zigwheels
    - listitem:
      - link "":
        - /url: https://x.com/zigwheels
    - listitem:
      - link "":
        - /url: https://www.youtube.com/channel/UCjmjWp38PCg15Z5ZS-tmpfw
    - listitem:
      - link "":
        - /url: https://www.instagram.com/zigwheels
    - listitem:
      - link "":
        - /url: https://in.linkedin.com/company/zigwheels
  - text: Download ZigWheels app 4.6  User Rating 10 Lakh+ Download
  - img "appimg"
  - img "appimg"
  - text: © 2008-2026 Girnar Software Pvt. Ltd. All rights Reserved.
- text: Compare Close
```

# Test source

```ts
  57  | 
  58  |         await pages.homePage.verifyNewCarsMenu();
  59  | 
  60  |     });
  61  | 
  62  | 
  63  |     test('Verify New Cars Sub Menu', async ({ pages }) => {
  64  | 
  65  |         await pages.homePage.hoverCarMenu();
  66  | 
  67  |         await pages.homePage.verifyNewCarsSubMenu();
  68  | 
  69  |         await pages.homePage.clickSearchNewCars();
  70  | 
  71  |         await expect(pages.page).toHaveURL(/.*newcars.*/);
  72  | 
  73  |     });
  74  | 
  75  | 
  76  |     // Negative test case
  77  |     test('Verify New Cars Sub Menu Not Visible', async ({ pages }) => {
  78  | 
  79  |         await pages.homePage.verifyNewCarsSubMenuNotVisible();
  80  | 
  81  |     });
  82  | 
  83  | 
  84  |     // SEARCH-001
  85  |     test('SEARCH-001 Verify valid car search', async ({ pages }) => {
  86  | 
  87  |         const car = searchData.validCars[1];
  88  | 
  89  |         await pages.homePage.searchCar(car.name);
  90  | 
  91  |         await pages.homePage.selectSearchSuggestion(car.name);
  92  | 
  93  |         await expect(pages.page).toHaveURL(
  94  |             new RegExp(car.url)
  95  |         );  
  96  | //SEARCH-002
  97  | 
  98  |     });
  99  | test('SEARCH-002 Verify invalid car search', async ({ pages }) => {
  100 | 
  101 |     const carName = searchData.invalidCars[0];
  102 | 
  103 |     await pages.homePage.searchCar(carName);
  104 | 
  105 |     await pages.homePage.verifySuggestionNotVisible(carName);
  106 | 
  107 | });
  108 | test('SEARCH-003 Verify clear search functionality', async ({ pages }) => {
  109 | 
  110 |     await pages.homePage.searchCar('Hyundai Creta');
  111 | 
  112 |     await pages.homePage.clearSearch();
  113 | 
  114 |     await pages.homePage.verifySearchBoxEmpty();
  115 | 
  116 | });
  117 | test('SEARCH-004 Verify valid search suggestion', async ({ pages }) => {
  118 | 
  119 |     const car = searchData.validCars[0];
  120 | 
  121 |     await pages.homePage.searchCar(car.name);
  122 | 
  123 |     await pages.homePage.verifySearchSuggestion(car.name);
  124 | 
  125 | });
  126 | test('SEARCH-005 Verify valid car search for multiple cars', async ({ pages }) => {
  127 | 
  128 |     for (const car of searchData.validCars) {
  129 | 
  130 |         await pages.homePage.navigateTo();
  131 | 
  132 |         await pages.homePage.searchCar(car.name);
  133 | 
  134 |         await pages.homePage.selectSearchSuggestion(car.name);
  135 | 
  136 |         await expect(pages.page).toHaveURL(
  137 |             new RegExp(car.url)
  138 |         );
  139 | 
  140 |     }
  141 | 
  142 | });
  143 | 
  144 | test('BUDGET-001 Verify all Cars by Budget boxes', async ({ pages }) => {
  145 | 
  146 |     await pages.homePage.verifyAllBudgetBoxes();
  147 | 
  148 | });
  149 | test('BUDGET-002 Verify all budget boxes navigation', async ({ pages }) => {
  150 | 
  151 |     for (let i = 0; i < searchData.budgetCars.length; i++) {
  152 | 
  153 |         await pages.homePage.navigateTo();
  154 | 
  155 |         await pages.homePage.clickBudgetBox(i);
  156 | 
> 157 |         await expect(pages.page).toHaveURL(
      |                                  ^ Error: expect(page).toHaveURL(expected) failed
  158 |             new RegExp(searchData.budgetCars[i].url)
  159 |         );
  160 |     }
  161 | 
  162 | });
  163 | });
  164 | 
  165 | 
```