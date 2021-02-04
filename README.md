# Prerequisite

## Create new project

```shell
react-native init NewsHub
```

## Install NativeBase

```shell
npm install native-base --save
```

## Install peer dependencies

```shell
react-native link
```

## Install moment-timezone

```shell
npm install moment-timezone --save
```

## Install react-native-webview

```shell
npm install --save react-native-webview
```

## Get apikey from NewsApi


# Design


## Create getNews()

Create getNews() with api-key, link and country code.

## Create tabs

Source: https://docs.nativebase.io/Components.html#tabs-def-headref

Using getNews(), all the news item will be displayed here.



## Time format

Use moment time format.


## News Item

News item showing the image, title, author, description, and the date it was published.


## News Detail

Detail screen will display the articles image, title, author, date published, url to the article, content and share button.
