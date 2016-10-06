---
layout: post
title: "Automation isn't Inhuman"
summary: "Today's infrastructures are all about hands-free, ahead-of-time automation and deployment, but that doesn't mean removing the human element from the equation."
date: 2016-08-30 09:46
updated:
topic: Automation
tags: hci people
thumbnail: {{ image_path }}
listeningto: 
comments: true
---
Automation is the hot buzzword of the modern IT solution. Whether it's multi-cloud, DevOps, or just a test lab, we're more eager to automate than ever before. As an engineer and consultant to customers, I frequently find myself preaching the good news of VMware's automation possibilities, ranging from the really cool capabilities of Storage Policy-Based Management to how vRealize is the perfect companion to a VSAN-powered, quick to deploy, easy to manage and analyze datacenter. Through it all, it's fun to geek out at the underlying software brains and how fast thousands of VMs can be provisioned out for any number of defined use cases, but I'm careful to remind myself of the underlying reason for it all: *to make humans happy*.

It's not just about fast, even though any good automation solution should be fast, and any storage and compute it deploys upon should be even faster. It's really about minimizing the problematic parts of infrastructure from necessary people-based micro-management. We talk about ideas like *perfect consistency* and *well-defined service consumables*, but we're really after taking ourselves out of the uncomfortable micro-management scenarios like the detail steps of deploying some new workload, or carving up a new unit of storage. As a former customer, I can look back to clear examples where I made simple (but sometimes costly!) mistakes when deploying a new OS or app, or performing storage provisioning or maintenance. No platform is going to perfectly account for this, but a good one should minimize mistakes.

The problem is that the perceived idea here is to just remove IT people from the equation. Not only is that not the goal, that would actually *counteract* the goal. I think there's an incorrect perception among some that the ideal end state is some cold, lifeless IT infrastructure in which everything runs based on a static set of software rules, and business customers are at the mercy of the all-knowing computer to determine whether they get their workload deployed or upgraded as they ask (or at all).