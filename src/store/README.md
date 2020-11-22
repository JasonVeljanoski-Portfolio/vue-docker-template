# index

**Author:** Jason Veljanoski

`index.js` store module.

The primary store. Imports all vuex modules.


## State

| Name     | Type      | Description           | Default |
| -------- | --------- | --------------------- | ------- |

## Mutations

| Name            | Description                              |
| --------------- | ---------------------------------------- |

## Actions

| Name           | Description             |
| -------------- | ----------------------- |

## Modules

| Modules              |
| -------------------- |
| Drawer: DrawerModule |


# Drawer

**Author:** Jason Veljanoski

`Drawer.js` store module.

Deals with the state of the sidebar (show or hide).



## State

| Name     | Type      | Description           | Default |
| -------- | --------- | --------------------- | ------- |
| `drawer` | `Boolean` | Flag to show sidebar. | `false` |

## Mutations

| Name            | Description                              |
| --------------- | ---------------------------------------- |
| `TOGGLE_DRAWER` | Flip the Boolean value of `state.drawer` |

## Actions

| Name           | Description             |
| -------------- | ----------------------- |
| `toggleDrawer` | Commits `TOGGLE_DRAWER` |

