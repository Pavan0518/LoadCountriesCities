# LoadCountriesCities

This angular app describes about loading countries and cities.


# Install NPM Package

npm i country-state-city

# Imports
import csc from 'country-state-city'
 
// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'

# Calling
csc.getCountryById: (id: string) => ICountry;

csc.getStateById: (id: string) => IState;

csc.getCityById: (id: string) => ICity;

csc.getStatesOfCountry: (countryId: string) => IState[];

csc.getCitiesOfState: (stateId: string) => ICity[];

csc.getAllCountries: () => ICountry[];

csc.getCountryByCode: (code: string) => ICountry;
