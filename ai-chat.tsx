"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, Bot, User, Sparkles, Video, Users, Edit, Layers, Mic, ImageIcon } from "lucide-react"

export function AIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your Revolutionary AI Video Studio Assistant. I can help you create amazing videos with natural language commands. What would you like to create today?",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: 2,
      type: "user",
      content: "I need to create a 30-second product demo for our new smartphone targeting tech enthusiasts",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: 3,
      type: "ai",
      content:
        "Perfect! I'll create a tech-focused smartphone demo. Let me generate a sleek, modern video with:\n\n• Dynamic product shots with smooth camera movements\n• Tech-focused features highlighting (processor, camera, display)\n• Modern electronic music background\n• Clean, minimalist graphics\n• Professional voice-over with technical terminology\n\nShould I proceed with this concept, or would you like to adjust anything?",
      timestamp: new Date(Date.now() - 180000),
      suggestions: ["Generate Video", "Add More Features", "Change Style", "Adjust Duration"],
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickActions = [
    { icon: Video, label: "Generate Video", color: "bg-blue-500" },
    { icon: Users, label: "Create Character", color: "bg-green-500" },
    { icon: Edit, label: "Edit Existing", color: "bg-purple-500" },
    { icon: Layers, label: "Batch Process", color: "bg-yellow-500" },
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const newUserMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai" as const,
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        suggestions: ["Generate Now", "Modify Request", "See Examples", "Save Template"],
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const generateAIResponse = (userInput: string) => {
    // Simple AI response simulation based on keywords
    if (userInput.toLowerCase().includes("video")) {
      return "I understand you want to create a video! I can help you with:\n\n• Video generation from text prompts\n• Character-based storytelling\n• Multi-style variations\n• Custom duration settings\n• Platform optimization\n\nWhat specific type of video are you looking to create?"
    }
    if (userInput.toLowerCase().includes("character")) {
      return "Great! I can help you create consistent characters with:\n\n• Detailed appearance customization\n• Personality trait definition\n• Voice and speech patterns\n• Emotional range mapping\n• Cross-video consistency\n\nWhat kind of character do you have in mind?"
    }
    return "I'm here to help you create amazing videos! You can ask me to:\n\n• Generate videos from descriptions\n• Create and manage characters\n• Edit existing content\n• Process multiple videos at once\n• Optimize for different platforms\n\nWhat would you like to work on?"
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
      {/* Chat Interface */}
      <div className="lg:col-span-3 flex flex-col">
        <Card className="bg-white/10 border-white/20 flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              AI Video Assistant
              <Badge variant="secondary" className="ml-auto">
                <Sparkles className="w-3 h-3 mr-1" />
                95% Accuracy
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "ai" && (
                      <Avatar className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500">
                        <AvatarFallback>
                          <Bot className="w-4 h-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "bg-white/10 border border-white/20 text-white"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-70 mt-2">{message.timestamp.toLocaleTimeString()}</p>
                      {message.suggestions && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              size="sm"
                              variant="outline"
                              className="text-xs border-white/20 text-white hover:bg-white/10"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.type === "user" && (
                      <Avatar className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500">
                        <AvatarFallback>
                          <User className="w-4 h-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <Avatar className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500">
                      <AvatarFallback>
                        <Bot className="w-4 h-4 text-white" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-6 border-t border-white/20">
              <div className="flex gap-2">
                <Input
                  placeholder="Describe what you want to create..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-500 to-blue-500"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Quick Actions */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                  onClick={() => setInputMessage(`Help me ${action.label.toLowerCase()}`)}
                >
                  <div className={`w-4 h-4 mr-2 ${action.color} rounded p-0.5`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  {action.label}
                </Button>
              )
            })}
          </CardContent>
        </Card>

        {/* Example Prompts */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Example Prompts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Create a 30-second product demo",
              "Generate 10 cooking tutorial shorts",
              "Make a documentary about space",
              "Design a character for my brand",
              "Edit my existing video with AI",
            ].map((prompt, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full text-left justify-start text-sm text-gray-300 hover:text-white hover:bg-white/10 h-auto p-3"
                onClick={() => setInputMessage(prompt)}
              >
                "{prompt}"
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* AI Capabilities */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">AI Capabilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Video className="w-4 h-4 text-blue-400" />
              Video Generation (4K/8K)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Users className="w-4 h-4 text-green-400" />
              Character Consistency
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Mic className="w-4 h-4 text-purple-400" />
              Voice & Lip Sync
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Edit className="w-4 h-4 text-yellow-400" />
              Smart Auto-Cut
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Layers className="w-4 h-4 text-red-400" />
              Batch Processing
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <ImageIcon className="w-4 h-4 text-pink-400" />
              Multi-Modal Input
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
