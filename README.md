
# Image Placeholder API
![App Screenshot](https://placeholder-seven.vercel.app/api?text=Image%20Placeholder%20API&width=200%height=300)

simple API generate image holder with your custom for free

## API

#### Get Image Placeholder

```http
  GET https://placeholder-seven.vercel.app/api?{parameters}
```

| Parameters | Type | Description | Default |
| :-------- | :------- | :------------------------- | :- |
| `width` | `string` | image width to generate |100|
| `height` | `string` | image width to generate |100|
| `text` | `string` | Your display text |`"Image"`|
| `backgroundColor` | `string` | background image use RBG encoded | <span style="background-color:#dde3e9; color:black; border-radius:2px; padding:2px;">#dde3e9</span>|
| `textColor` | `string` | text color image use RBG encoded |<span style="background-color:#eff1f3; color:black; border-radius:2px; padding:2px;">#eff1f3</span>|
| `fontSize` | `string` | your respected font size using pango_markup font size unit |`"medium"`|

## How to Use
### Html
```html
<img src="https://placeholder-seven.vercel.app/api?text=Image%20Placeholder%20API&width=200%height%3D300" ...>
```
### cURL
```bash
curl --location 'https://placeholder-seven.vercel.app/api?text=Image%20Placeholder%20API&width=200%height%3D300' \
--data ''
```
### javaScript
```js
const raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow"
};

fetch("https://placeholder-seven.vercel.app/api?text=Image Placeholder API&width=200%height=300", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
