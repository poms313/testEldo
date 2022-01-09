<?php

namespace App\Entity;

use App\Repository\ArtisanRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArtisanRepository::class)
 */
class Artisan
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Review::class, mappedBy="artisanId", orphanRemoval=true)
     */
    private $artisanReviews;

    public function __construct()
    {
        $this->artisanReviews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Review[]
     */
    public function getArtisanReviews(): Collection
    {
        return $this->artisanReviews;
    }

    public function addArtisanReview(Review $artisanReview): self
    {
        if (!$this->artisanReviews->contains($artisanReview)) {
            $this->artisanReviews[] = $artisanReview;
            $artisanReview->setArtisanId($this);
        }

        return $this;
    }

    public function removeArtisanReview(Review $artisanReview): self
    {
        if ($this->artisanReviews->removeElement($artisanReview)) {
            // set the owning side to null (unless already changed)
            if ($artisanReview->getArtisanId() === $this) {
                $artisanReview->setArtisanId(null);
            }
        }

        return $this;
    }
}
