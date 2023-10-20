# Nuxt Plugin to handle user location

Psuedo code for this plugin:

- Default state for location would be a point in Sharqiyah which will be the center for google maps
- On Init, if the state value doesn't exist, set this value in store

- check if the user has location enabled
  - if location not enabled: check if they dismessed alert from store
    - if alert dismissed: just use the existing value in state
    - if alert not dismissed: prompt them to enable it through a modal or alert
      - if modal accepted: prompt them through the native browser api,
        - if native accepted: get the location, set it in store, watch value and update it in store every 5 minutes
        - if native rejected: set a state dismessed so that the prompt doesn't open again
      - if modal reject, set a state dismessed so that the prompt doesn't open again
  - if location enabled:  get the location, set it in store, watch value and update it in store every 5 minutes
