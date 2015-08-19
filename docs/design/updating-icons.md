@page updating-icons Updating Icons
@parent design 3

## Adding New Icons

### Creating an Icon

* Use one of the existing svg icons as a template
* Follow the linear and light weight style
* Save icon as an .svg and store a copy under the [publishing-ui](https://storegit.apple.com/projects/CS/repos/publishing-ui/browse/docs/guides/icon-svg) repo

## Adding the Icon to the Icon Font

* Upload the [pui-icons.json](https://storegit.apple.com/projects/CS/repos/publishing-ui/browse/docs/guides/pui-icons.json) file to [icomoon.io](https://icomoon.io/app/).
* Add new icon to the library
* Generate Font
* Under "Preferences" make sure the setting **Encode and Embed Font in CSS** is selected.
* Update generated json file
* Update pui-icons.less with new icons and embeded font
* Commit changes
