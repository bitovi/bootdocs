@page using-sass Using Sass
@parent css 12
While Bootstrap is built on Less, it also has an [official Sass port](https://github.com/twbs/bootstrap-sass). We maintain it in a separate GitHub repository and handle updates with a conversion script.


## What's Included
Since the Sass port has a separate repo and serves a slightly different audience, the contents of the project differ greatly from the main Bootstrap project. This ensures the Sass port is as compatible with as many Sass-based systems as possible.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>lib/</code></th>
      <td>Ruby gem code (Sass configuration, Rails and Compass integrations)</td>
    </tr>
    <tr>
      <th scope="row"><code>tasks/</code></th>
      <td>Converter scripts (turning upstream Less to Sass)</td>
    </tr>
    <tr>
      <th scope="row"><code>test/</code></th>
      <td>Compilation tests</td>
    </tr>
    <tr>
      <th scope="row"><code>templates/</code></th>
      <td>Compass package manifest</td>
    </tr>
    <tr>
      <th scope="row"><code>vendor/assets/</code></th>
      <td>Sass, JavaScript, and font files</td>
    </tr>
    <tr>
      <th scope="row"><code>Rakefile</code></th>
      <td>Internal tasks, such as rake and convert</td>
    </tr>
  </tbody>
</table>

Visit the [Sass port's GitHub repository](https://github.com/twbs/bootstrap-sass) to see these files in action.

## Installation
For information on how to install and use Bootstrap for Sass, consult the [GitHub repository readme](https://github.com/twbs/bootstrap-sass). It's the most up to date source and includes information for use with Rails, Compass, and standard Sass projects.

[Boostrap for Sass](https://github.com/twbs/bootstrap-sass)
