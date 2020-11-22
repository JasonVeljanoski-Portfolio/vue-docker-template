# TheFooter

**Author:** Jason Veljanoski

The custom HTML `<TheFooter>` component.

A minimalistic footer containing:

- logo
- copyright
- nav links (including `/privacy` and `/terms`)
- social media `<BaseSocialMedia>`

## Props

| Name                  | Type    | Description                                                  | Default |
| --------------------- | ------- | ------------------------------------------------------------ | ------- |
| `navItems` *required* | `Array` | Specifies the **name** and **slug** that specify the navigation links in the component. In the form `[ { name: "Home", slug: "/" },{ name: "Contact", slug: "/contact" } ]` |         |



# TheHeader

**Author:** Jason Veljanoski

The custom HTML `<TheHeader>` component.

A minimalistic header containing:

- logo
- nav links

## Props

| Name                  | Type    | Description                                                  | Default |
| --------------------- | ------- | ------------------------------------------------------------ | ------- |
| `navItems` *required* | `Array` | Specifies the **name** and **slug** that specify the navigation links in the component. In the form `[ { name: "Home", slug: "/" },{ name: "Contact", slug: "/contact" } ]` |         |



# TheIndicator

**Author:** Jason Veljanoski

The custom HTML `<TheIndicator>` component.

A colored rectangle under the Header to show the progress of how much of the page has been scrolled.

## Props

| Name    | Type     | Description                                                  | Default     |
| ------- | -------- | ------------------------------------------------------------ | ----------- |
| `color` | `String` | Specify the color of the indicator. In the form that the `color` tag would be interpreted in CSS. | `"#2caaca"` |

## Lifecycle Hooks

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `onMounted`   | `window.addEventListener("scroll", progressBarCallback);`    |
| `onUnmounted` | `window.removeEventListener("scroll", progressBarCallback);` |

## Methods

### progressBarCallback()

**Return value**

Changes the width of the indicator as a function of the scroll height percentage.



### hexToRGB(hex)

The `hexToRGB()` method takes a hex string and returns the rgb equivalent as an object.

**Example**

```js
const hex = '#2caaca';

console.log(hexToRGB(hex));
// expected output: { r: 44, g: 170, b: 202 }
```

**Syntax**

```typescript
const rgb = hexToRGB(hex)
```

**Parameters**

- **`hex: String`**
  The hex string. E.g. `#2caaca`


**Return value**

An object with the rgb equivalent. E.g. `{ r: 44, g: 170, b: 202 }`



# TheSidebar

**Author:** Jason Veljanoski

The custom HTML `<TheSidebar>` component.

Creates a blank sidebar with no content inside. Click events can be used to trigger when to show the sidebar along with other Vue directives.

Dependent on the Vuex store.

## Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `default` | Use this slot to set the textarea value |

## Computed

| Name     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `drawer` | Flag variable from the Vuex Store. Indicates when the sidebar should show. |

## Methods

### toggle()

The `toggle()` method is called on the `@click` event, specifically when the darkened background is clicked (when you click away from the sidebar) or when a nav item is clicked. This will trigger the `drawer` flag variable in the Vuex store to flip its Boolean sign.

**Example**

```html
<div @click="toggle" class="button">
	Show Sidebar Button
</div>
<div v-if="drawer" >
    <SidebarContent /> <!-- example component -->
</div>
```

**Syntax**

```typescript
@click="toggle"
```



# TheSidebarContent

**Author:** Jason Veljanoski

The custom HTML `<TheSidebarContent>` component.

A minimalistic component to fill a sidebar with:

- logo
- nav items
- social media links

Depends on the Vuex Store.

## Props

| Name                  | Type    | Description                                                  | Default |
| --------------------- | ------- | ------------------------------------------------------------ | ------- |
| `navItems` *required* | `Array` | Specifies the **name** and **slug** that specify the navigation links in the component. In the form `[ { name: "Home", slug: "/" },{ name: "Contact", slug: "/contact" } ]` |         |

## Methods

### toggle()

The `toggle()` method is called on the `@click` event. It is used in this component to flip the boolean flag of `drawer` to show or hide the sidebar. It is used in this component when an nav is clicked (including the logo).

**Example**

```html
<div @click="toggle" class="nav-item">
	home
</div>
```

**Syntax**

```typescript
@click="toggle"
```