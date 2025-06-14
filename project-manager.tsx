"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FolderOpen, Plus, Search, Filter, MoreHorizontal, Video, Users, Clock, Star, Share, Edit } from "lucide-react"

export function ProjectManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const projects = [
    {
      id: 1,
      name: "Product Launch Campaign",
      type: "Commercial",
      status: "In Progress",
      videos: 12,
      characters: 3,
      lastModified: "2 hours ago",
      thumbnail: "/placeholder.svg?height=120&width=200",
      collaborators: ["JD", "SM", "AL"],
      tags: ["Product", "Marketing", "Launch"],
    },
    {
      id: 2,
      name: "Educational Series",
      type: "Educational",
      status: "Completed",
      videos: 8,
      characters: 2,
      lastModified: "1 day ago",
      thumbnail: "/placeholder.svg?height=120&width=200",
      collaborators: ["DR", "KL"],
      tags: ["Education", "Tutorial", "Science"],
    },
    {
      id: 3,
      name: "Social Media Content",
      type: "Social",
      status: "Draft",
      videos: 25,
      characters: 5,
      lastModified: "3 days ago",
      thumbnail: "/placeholder.svg?height=120&width=200",
      collaborators: ["MR", "JS", "TK", "LP"],
      tags: ["Social", "TikTok", "Instagram"],
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Product Demo Template",
      description: "Professional product demonstration with features showcase",
      thumbnail: "/placeholder.svg?height=120&width=200",
      uses: 47,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Educational Explainer",
      description: "Clear and engaging educational content template",
      thumbnail: "/placeholder.svg?height=120&width=200",
      uses: 32,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Social Media Short",
      description: "Optimized for TikTok, Instagram, and YouTube Shorts",
      thumbnail: "/placeholder.svg?height=120&width=200",
      uses: 89,
      rating: 4.9,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500"
      case "Completed":
        return "bg-green-500"
      case "Draft":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Project Manager</h2>
          <p className="text-blue-200">Organize and manage your video projects</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Button variant="outline" className="border-white/20 text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/10">
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="shared">Shared with Me</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-medium">{project.name}</h3>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.type}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                      <span className="text-xs text-gray-400">{project.status}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {project.videos}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.characters}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {project.lastModified}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {project.collaborators.map((collaborator, index) => (
                          <Avatar key={index} className="w-6 h-6 border-2 border-gray-800">
                            <AvatarFallback className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                              {collaborator}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Share className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-white/20 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{template.description}</p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white">{template.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">{template.uses} uses</span>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500">Use Template</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shared" className="space-y-4">
          <div className="text-center py-12">
            <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No Shared Projects</h3>
            <p className="text-gray-400">Projects shared with you will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
