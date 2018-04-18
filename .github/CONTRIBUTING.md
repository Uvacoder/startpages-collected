# How to contribute

The most efficient and fastest way to contribute to the Emporium is by making a well prepared Pull Request.  
You can also submit via the Issues but this will take longer for the page to be added.

## Making changes via Pull Request

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Fork the repository on GitHub
* Make the desired changes adding the Startpage(s)

## Adding Startpage(s)  

There are two files you will need to edit to add the Startpage - `_data/startpages.yml` with the page info and `/index.html` to update the number of pages listed.  

### startpages.yml configuration  

The Startpages data file is formatted into sections of 7 variables.  
Each variable translates to the information you see on the Emporium.  
Put your page at the top of the data file or else it won't show at the top of the site.

* 'image_url' - Location of the 368 x 180 preview image. This is to be kept in /media/images.
* 'full_path' - Path of the live Startpage. This will either be a local path to /startpages/ or a URL of your hosted page.
* 'title' - Title of the Startpage.
* 'author' - Creator of the Startpage.
* 'source' - Link to the source files.
* 'tags' - Startpage tags separated by a space.
* 'col-size' - This is a UI variable and should not be modified.
