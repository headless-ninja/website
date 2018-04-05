---
title: Enable the HN Module in Drupal
category: drupal-quickstart
weight: -100
---

To use the Headless Ninja module, you need a Drupal installation. For this guide we assume you already have basic Drupal knowledge.

## New Drupal website

If you want to try out Headless Ninja on a new Drupal installation, you can use the HN Starterskit.

Before you start, you need to make sure Composer is installed on your computer. If you run `composer -V` in your terminal and see something like `Composer version 1.x.x` popping up, you're ready to go.

Create a directory for your project and run the following command in your terminal:

```bash
composer create-project headless-ninja/drupal-template -s dev --remove-vcs
```

This will download a basic Drupal project with HN and other nice-to-have modules installed.

To start the php server, run `composer run start-server --timeout 0` in your terminal. You will need to keep this command running while you're developing.

In your terminal, the URL of your Drupal installation will show up. Open that URL in your browser and follow the on-screen instructions to install the HN Starterskit.

## Enable in existing Drupal website

If you have a Drupal website based on Composer, you can run `composer require drupal/hn` to download the latest version of HN. 

If you are running a traditional file-based Drupal project, you can download the HN module from the [Headless Ninja Drupal page](https://www.drupal.org/project/hn) and extract the zip in the `modules` folder.

You can enable the module trough the _Extend_ page.
