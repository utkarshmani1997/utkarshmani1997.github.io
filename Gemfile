source "https://rubygems.org"

# GitHub Pages builds the site with this gem set. Pinning it keeps a local
# build identical to what Pages produces on push.
gem "github-pages", group: :jekyll_plugins

# Faster local rebuilds while editing.
group :jekyll_plugins do
  gem "jekyll-feed"
end

# Windows / JRuby helpers (harmless elsewhere).
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
