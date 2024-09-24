---
title: CSS Tutorial
description: This is a comprehensive CSS tutorial for learning CSS from basics to advanced concepts.
slug: css-tutorial
date: 31/02/2025
author: Atharva
image: /css.jpg
---

# Introduction

CSS (Cascading Style Sheets) is one of the core technologies for building web pages. It is primarily used for describing the presentation of a document written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or XML. In this tutorial, we will cover everything you need to know about CSS, from the basics to advanced topics.

## Table of Contents

1. [What is CSS?](#what-is-css)
2. [Setting Up the Environment](#setting-up-the-environment)
3. [Basic Syntax](#basic-syntax)
4. [Selectors](#selectors)
5. [Box Model](#box-model)
6. [Flexbox](#flexbox)
7. [Grid](#grid)
8. [Responsive Design](#responsive-design)
9. [Animations](#animations)
10. [Transitions](#transitions)
11. [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
12. [Variables](#variables)
13. [Best Practices](#best-practices)
14. [Conclusion](#conclusion)

## What is CSS?

CSS is a stylesheet language that allows you to control the layout and appearance of web pages. It is an essential skill for web developers.

## Setting Up the Environment

To start coding in CSS, you need a text editor and a web browser. Popular text editors include [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), and [Atom](https://atom.io/).

## Basic Syntax

CSS syntax is the set of rules that define a correctly structured CSS stylesheet. Here are some basic syntax rules:

```css
/* This is a comment */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

#Example: body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

#Selectors

/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.classname {
  color: green;
}

/* ID Selector */
#idname {
  color: red;
}

/* Attribute Selector */
input[type="text"] {
  border: 1px solid #ccc;
}

#BoxModel div {
  width: 300px;
  padding: 20px;
  border: 10px solid black;
  margin: 30px;
}

#Flexbox .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.item {
  background-color: lightblue;
  padding: 20px;
  margin: 10px;
}

#Grid .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.item {
  background-color: lightgreen;
  padding: 20px;
}

#Typography
Typography involves styling text. Here are some examples:
h1 {
  font-size: 2em;
  color: navy;
}

p {
  line-height: 1.5;
  text-align: justify;
}
```
