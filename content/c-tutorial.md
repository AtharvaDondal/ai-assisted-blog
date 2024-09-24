---
title: C Tutorial
description: This is a comprehensive C tutorial for learning C from basics to advanced concepts.
slug: c-tutorial
date: 31/02/2025
author: Atharva
image: /c.jpg
---

# Introduction

C is one of the most fundamental programming languages in the world. It is primarily used for system programming and embedded systems. In this tutorial, we will cover everything you need to know about C, from the basics to advanced topics.

## Table of Contents

1. [What is C?](#what-is-c)
2. [Setting Up the Environment](#setting-up-the-environment)
3. [Basic Syntax](#basic-syntax)
4. [Variables and Data Types](#variables-and-data-types)
5. [Operators](#operators)
6. [Control Structures](#control-structures)
7. [Functions](#functions)
8. [Pointers](#pointers)
9. [Structures](#structures)
10. [File I/O](#file-io)
11. [Dynamic Memory Allocation](#dynamic-memory-allocation)
12. [Preprocessor Directives](#preprocessor-directives)
13. [Error Handling](#error-handling)
14. [Best Practices](#best-practices)
15. [Conclusion](#conclusion)

## What is C?

C is a powerful programming language that allows you to create efficient and portable code. It is an essential skill for system and embedded developers.

## Setting Up the Environment

To start coding in C, you need a text editor and a compiler. Popular text editors include [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), and [Atom](https://atom.io/). Common compilers are [GCC](https://gcc.gnu.org/) and [Clang](https://clang.llvm.org/).

## Basic Syntax

C syntax is the set of rules that define a correctly structured C program. Here are some basic syntax rules:

```c
// This is a single-line comment
/*
  This is a multi-line comment
*/
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}

# Variables and Data Types
#include <stdio.h>

int main() {
    int age = 25; // Integer variable
    float salary = 50000.50; // Float variable
    char grade = 'A'; // Character variable
    char name[] = "John Doe"; // String variable

    printf("Name: %s\n", name);
    printf("Age: %d\n", age);
    printf("Salary: %.2f\n", salary);
    printf("Grade: %c\n", grade);

    return 0;
}

#Operators
Operators are symbols that perform operations on variables and values. Here are some examples:
#include <stdio.h>

int main() {
    int a = 10, b = 20;

    // Arithmetic Operators
    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);

    // Relational Operators
    printf("a == b: %d\n", a == b);
    printf("a != b: %d\n", a != b);

    // Logical Operators
    printf("(a < b) && (a > 5): %d\n", (a < b) && (a > 5));
    printf("(a > b) || (a < 15): %d\n", (a > b) || (a < 15));

    return 0;
}

#Control Structures
Control structures are used to control the flow of a program. Here are some examples:

#include <stdio.h>

int main() {
    int number = 10;

    // If-Else Statement
    if (number > 0) {
        printf("Number is positive\n");
    } else {
        printf("Number is negative\n");
    }

    // For Loop
    for (int i = 0; i < 5; i++) {
        printf("i: %d\n", i);
    }

    // While Loop
    int j = 0;
    while (j < 5) {
        printf("j: %d\n", j);
        j++;
    }

    return 0;
}

#Functions
#include <stdio.h>

// Function declaration
void greet();

int main() {
    greet(); // Function call
    return 0;
}

// Function definition
void greet() {
    printf("Hello, World!\n");
}

#Pointers

#include <stdio.h>

int main() {
    int var = 10;
    int *ptr = &var; // Pointer to var

    printf("Value of var: %d\n", var);
    printf("Address of var: %p\n", &var);
    printf("Value of ptr: %p\n", ptr);
    printf("Value pointed to by ptr: %d\n", *ptr);

    return 0;
}

#File I/O

#include <stdio.h>

int main() {
    FILE *file;
    char data[50];

    // Writing to a file
    file = fopen("example.txt", "w");
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    fprintf(file, "Hello, World!\n");
    fclose(file);

    // Reading from a file
    file = fopen("example.txt", "r");
    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    fgets(data, 50, file);
    printf("Data from file: %s\n", data);
    fclose(file);

    return 0;
}


```
