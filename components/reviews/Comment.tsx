"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

function Comment({ comment }: { comment: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const maxLength = 130;
  const isLong = comment.length > maxLength;

  // Safely truncate without cutting off words awkwardly
  const truncatedComment =
    isLong && !isExpanded
      ? comment.slice(0, maxLength).trimEnd() + "..."
      : comment;

  return (
    <div className="break-words">
      <p className="text-sm w-full">{truncatedComment}</p>
      {isLong && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? "show less" : "show more"}
        </Button>
      )}
    </div>
  );
}

export default Comment;
