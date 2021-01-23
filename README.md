# Climate Card 
This is a Home Assistant Custom card for controlling your climate devices. It supports both heating and cooling operation with charming animation during different states. 
Also, it is able to show your climate humidity! (if you wonder how, please take a look at my [Generic Climate Integeration](https://github.com/imohsenb/homeassistant-generic-climate)).

## Install:
1. Download `climate-card.js` file into your home assistant `config/www/climate-card` folder
2. Add `climate-js` into your lovelace resource or `configuration.yaml`:
```yaml
resources:
  - url: /hacsfiles/climate-card/climate-card.js
    type: module
```
3. If you would like to show in a proper font please add this google font to your resource too:
```yaml
resources:
  - url: https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap
    type: stylesheet

```

## Preview
Here is the some preview of the different state

<p align="center">
<img src="https://github.com/imohsenb/homeassistant-climate-card/raw/images/heating.gif" alt="Home Assistant Climate Heating Mode" width="400"/>
<img src="https://github.com/imohsenb/homeassistant-climate-card/raw/images/cooling.gif" alt="Home Assistant Climate Cooling Mode" width="400"/>
</p>

<p align="center">
<img src="https://github.com/imohsenb/homeassistant-climate-card/raw/images/01-heating-mode.jpg" alt="Home Assistant Climate Heating Mode" width="400"/>

<img src="https://github.com/imohsenb/homeassistant-climate-card/raw/images/03-cooling-mode.jpg" alt="Home Assistant Climate Cooling Mode" width="400"/>

</p>
<p align="center">
<img src="https://github.com/imohsenb/homeassistant-climate-card/raw/images/02-warm-mode.jpg" alt="Home Assistant Climate Warm Mode" width="400"/>
<img src="https://github.com/imohsenb/homeassistant-climate-card/raw/images/04-cool-mode.jpg" alt="Home Assistant Climate Cold Mode" width="400"/>
</p>




### Known Issues
- Mobile touch not working for target temperature picker