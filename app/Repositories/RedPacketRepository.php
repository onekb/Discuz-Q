<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Repositories;

use App\Models\RedPacket;
use App\Models\User;
use Discuz\Foundation\AbstractRepository;
use Illuminate\Database\Eloquent\Builder;

class RedPacketRepository extends AbstractRepository
{
    /**
     * Get a new query builder for the threads table.
     *
     * @return Builder
     */
    public function query()
    {
        return RedPacket::query();
    }

    /**
     * Find a redPacket by ID
     *
     * @param int $id
     * @param User|null $actor
     * @return Builder|\Illuminate\Database\Eloquent\Model
     */
    public function findOrFail($id, User $actor = null)
    {
        $query = $this->query()->where('thread_id', $id);

        return $query->first();
    }

}
