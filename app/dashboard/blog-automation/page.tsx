"use client";

import React, { useState, useEffect, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MDEditor from "@uiw/react-md-editor";

export default function BlogAutomation() {
  const [category, setCategory] = useState("");
  const [suggestedCategories, setSuggestedCategories] = useState<string[]>([]);

  const [title, setTitle] = useState("");
  const [suggestedTitles, setSuggestedTitles] = useState<string[]>([]);

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const generateCategories = () => {
    setSuggestedCategories(["Category 1", "Category 2", "Category 3"]);
  };

  const generateTitles = () => {
    setSuggestedTitles(["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"]);
  };

  const generateContent = () => {
    setContent("lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  };

  const generateImage = () => {
    setImage("https://via.placeholder.com/600");
  };

  const handleSubmit = () => {
    console.log({
      category,
      title,
      content,
      image,
    });
  };

  return (
    <Card className="w-full max-w-6xl mx-auto my-5">
      <CardHeader>
        <CardTitle>Create a New Blog Post</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>

          <div className="flex gap-2">
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category name"
              className="flex-1"
            />
            <Button
              onClick={generateCategories}
              variant="outline"
              className="flex-1"
            >
              Get Categories Suggestions from AI
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {suggestedCategories.map((c) => (
              <Button
                key={c}
                variant={category === c ? "default" : "outline"}
                onClick={() => setCategory(c)}
              >
                {c}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <div className="flex gap-2">
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your blog post title"
              className="flex-1"
            />
            <Button
              onClick={generateTitles}
              variant="outline"
              className="flex-1"
            >
              Get Titles Suggestion from AI
            </Button>
          </div>

          {suggestedTitles.length > 0 && (
            <div className="mt-2">
              <Label>Suggested Titles:</Label>
              <div
                className="grid gap-2 mt-2 grid-cols-1 sm:grid-cols-2 
lg:grid-cols-3"
              >
                {suggestedTitles.map((t) => (
                  <div
                    key={t}
                    className={`justify-start p-2 cursor-pointer ${
                      title === t
                        ? "border rounded-md bg-black text-white dark:bg-white dark:text-black"
                        : ""
                    }`}
                    onClick={() => setTitle(t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CONTENT FORM */}
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <div>
            <Button
              className="w-full"
              variant="outline"
              onClick={generateContent}
            >
              Generate Content with AI
            </Button>
          </div>

          {/* import MDEditor from "@uiw/react-md-editor"; */}
          <div className="pt-5">
            <MDEditor
              value={content}
              onChange={(value) => setContent(value || "")}
            />
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <div className="space-y-2">
          <Label htmlFor="image">Featured Image</Label>
          <div className="flex gap-2">
            <Button
              onClick={generateImage}
              className="flex-1"
              variant="outline"
            >
              Generate Image
            </Button>

            {/* SUBMIT FORM */}
            <Button onClick={handleSubmit} className="flex-1">
              Submit Blog Post
            </Button>
          </div>
          {image && (
            <img
              src={image}
              alt="Featured"
              className="mt-2 max-w-full h-auto rounded-lg"
            />    jvv
          )}
        </div>
      </CardContent>
    </Card>
  );
}
