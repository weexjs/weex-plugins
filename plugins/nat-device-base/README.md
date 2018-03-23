# nat-device-base

- [Documentation](http://natjs.com/#/#device)
- [Github](https://github.com/natjs/weex-nat-device-base)

## Installation
```
weexpack plugin add nat-device-base
```

```
npm install natjs --save
```

## Usage

Use in weex file (.we)

```html
<script>
import 'Nat' from 'natjs'

// get info
Nat.device.info((err, ret) => {
    console.log(ret)
})

</script>
```

See the Nat [Documentation](http://natjs.com/) for more details.
