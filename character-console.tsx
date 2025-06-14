"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Plus, Edit, Trash2, Heart, Smile, Angry, AngryIcon as Surprised } from "lucide-react"

export function CharacterConsole() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Dr. Sarah Chen",
      type: "Scientist",
      personality: "Intelligent, Curious, Professional",
      appearance: "Asian woman, 35, lab coat, glasses",
      voice: "Clear, authoritative, warm",
      emotions: ["neutral", "excited", "focused"],
    },
    {
      id: 2,
      name: "Chef Marco",
      type: "Chef",
      personality: "Passionate, Expressive, Warm",
      appearance: "Italian man, 45, chef uniform, mustache",
      voice: "Accented, enthusiastic, gestures",
      emotions: ["happy", "surprised", "proud"],
    },
  ])

  const emotions = [
    { name: "Neutral", icon: Smile, color: "text-gray-400" },
    { name: "Happy", icon: Smile, color: "text-yellow-400" },
    { name: "Excited", icon: Surprised, color: "text-orange-400" },
    { name: "Focused", icon: Smile, color: "text-blue-400" },
    { name: "Angry", icon: Angry, color: "text-red-400" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Character Library */}
      <div className="space-y-6">
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Character Library
              </CardTitle>
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500">
                <Plus className="w-4 h-4 mr-1" />
                New
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {characters.map((character) => (
              <div
                key={character.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedCharacter?.id === character.id
                    ? "bg-purple-500/20 border-purple-400"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                onClick={() => setSelectedCharacter(character)}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      {character.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{character.name}</h3>
                    <p className="text-sm text-gray-400">{character.type}</p>
                    <div className="flex gap-1 mt-1">
                      {character.emotions.map((emotion, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {emotion}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start border-white/20 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Character
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/20 text-white">
              <Edit className="w-4 h-4 mr-2" />
              Edit Selected
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/20 text-white">
              <Heart className="w-4 h-4 mr-2" />
              Save Template
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Character Editor */}
      <div className="lg:col-span-2">
        {selectedCharacter ? (
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Character Editor - {selectedCharacter.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="appearance" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4 bg-white/10">
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                  <TabsTrigger value="personality">Personality</TabsTrigger>
                  <TabsTrigger value="voice">Voice</TabsTrigger>
                  <TabsTrigger value="emotions">Emotions</TabsTrigger>
                </TabsList>

                <TabsContent value="appearance" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Character Name</label>
                      <Input value={selectedCharacter.name} className="bg-white/5 border-white/20 text-white" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Character Type</label>
                      <Select value={selectedCharacter.type}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Scientist">Scientist</SelectItem>
                          <SelectItem value="Chef">Chef</SelectItem>
                          <SelectItem value="Teacher">Teacher</SelectItem>
                          <SelectItem value="Business">Business Person</SelectItem>
                          <SelectItem value="Artist">Artist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 mb-2 block">Physical Description</label>
                    <Textarea
                      value={selectedCharacter.appearance}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Describe the character's appearance..."
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-2" />
                      <p className="text-sm text-white">Face</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-2" />
                      <p className="text-sm text-white">Body</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-2" />
                      <p className="text-sm text-white">Clothing</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-2" />
                      <p className="text-sm text-white">Style</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="personality" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-200 mb-2 block">Personality Traits</label>
                    <Textarea
                      value={selectedCharacter.personality}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Describe personality traits, mannerisms, and behavior..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Energy Level</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select energy level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Energy</SelectItem>
                          <SelectItem value="medium">Medium Energy</SelectItem>
                          <SelectItem value="high">High Energy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Communication Style</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="voice" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-200 mb-2 block">Voice Description</label>
                    <Textarea
                      value={selectedCharacter.voice}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Describe voice characteristics, accent, tone..."
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Pitch</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select pitch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Speed</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select speed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">Slow</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="fast">Fast</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 mb-2 block">Accent</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select accent" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="american">American</SelectItem>
                          <SelectItem value="british">British</SelectItem>
                          <SelectItem value="italian">Italian</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="emotions" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-200 mb-2 block">Available Emotions</label>
                    <div className="grid grid-cols-3 gap-3">
                      {emotions.map((emotion, index) => {
                        const Icon = emotion.icon
                        return (
                          <div
                            key={index}
                            className="p-4 rounded-lg bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-colors"
                          >
                            <Icon className={`w-8 h-8 mx-auto mb-2 ${emotion.color}`} />
                            <p className="text-sm text-white">{emotion.name}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2 mt-6">
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500">Save Character</Button>
                <Button variant="outline" className="border-white/20 text-white">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white/10 border-white/20">
            <CardContent className="flex items-center justify-center h-96">
              <div className="text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Select a Character</h3>
                <p className="text-gray-400">Choose a character from the library to edit</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
