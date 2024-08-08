---
sidebar_position: 1
---

# How it Works

Elemental benchmarks are a collection of micro-benchmarks that are used to evaluate the performance of Elemental's core functionality. The benchmarks are written in Golang itself and compares the execution time and cyclo-complexity of the code corresponding to various operations carried out by both Elemental and the standard MongoDB driver.

Each benchmark is executed multiple times and the average execution time is calculated. The cyclo-complexity of the code is calculated using the [gocyclo](https://marketplace.visualstudio.com/items?itemName=dwarakautarkar.vs-gocyclo) VSCode extension.